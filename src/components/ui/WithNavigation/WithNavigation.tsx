'use client';
import styles from "./WithNavigation.module.css";
import React, {Fragment, useState} from "react";
import {throttle} from "./../../util/throttle";
import {Setting, MouseEnterHandlerType, MouseMoveHandlerType} from './types';
import {navigationData} from './data';


const invalidId: number = -1;
// 隣接リストの木構造でメニューのIDをまとめる。有向グラフ。
const idTree: { [key: number]: number[] } = {};
const structIdTree = (parentId: number, settings: Setting[]): void => {
	settings.forEach(setting => {
		if (idTree[parentId] === undefined) idTree[parentId] = [];
		if (idTree[setting.id] === undefined) idTree[setting.id] = [setting.id];

		const st = new Set([...idTree[parentId], ...idTree[setting.id]]);
		if (parentId !== 0) st.add(parentId);
		idTree[setting.id] = Array.from(st);

		if (setting.children.length > 0) {
			structIdTree(setting.id, setting.children);
		}
	});
};
structIdTree(0, navigationData);


/**
 * ナビゲーションドロワー付きのレイアウト
 */
export default function WithNavigation({children, activeMenuId}: { children: React.ReactNode; activeMenuId: number; }) {
	const [hoverId, setHoverId] = useState(invalidId);

	//ナビゲーションのリンクにポインターが重なったときのイベントハンドラ
	const handleMouseEnter: MouseEnterHandlerType = id => {
		const [setting] = navigationData.filter(s => s.id === id);
		const size = setting.children.length;

		if (size === 0 && hoverId !== invalidId) setHoverId(invalidId);
		else if (size > 0 && id !== hoverId) setHoverId(id);
	};

	const handlePointerMove: MouseMoveHandlerType = event => {
		throttle(() => {
			const containerSelector = '.navigation-container';
			const target = event.target as HTMLElement;
			const elm = target.closest(containerSelector);
			if (elm === null) setHoverId(invalidId);
		}, 500)();
	};

	return (
		<div id="root" onPointerMove={event => handlePointerMove(event)}>
			<div className="navigation-container">
				<nav className={styles['navigation']}>
					<NavigationHeader/>
					<NavigationBody
						settings={navigationData}
						activeMenuId={activeMenuId}
						handleMouseEnter={handleMouseEnter}
					/>
					<NavigationFooter/>
				</nav>
				<NavigationDrawer activeMenuId={activeMenuId} hoverId={hoverId}/>
			</div>
			<main className={styles['main-content']}>
				{children}
			</main>
		</div>
	);
}

/**
 * ナビゲーションのヘッダー
 */
function NavigationHeader(): React.ReactNode {
	return <div className={styles['navigation-header']}></div>;
}

/**
 * ナビゲーションのボディ
 */
function NavigationBody({
	settings,
	activeMenuId,
	handleMouseEnter,
}: {
	settings: Setting[];
	activeMenuId: number;
	handleMouseEnter: MouseEnterHandlerType;
}): React.ReactNode {
	return (
		<div className={styles['navigation-body']}>
			<ul className={styles['navigation-list']}>
				{
					settings.map(setting => (
						<Fragment key={setting.id}>
							<li
								className={
									(idTree[activeMenuId].includes(setting.id))
										? `${styles['navigation-list-item']} ${styles['active']}`
										: styles['navigation-list-item']
								}
								onMouseEnter={() => handleMouseEnter(setting.id)}
							>
								<a className={styles['navigation-link']} href={setting.path}>
									<div
										className={`${styles['navigation-link-icon']} material-symbols-outlined`}>{setting.icon}</div>
									<div className={styles['navigation-link-label']}>{setting.label}</div>
								</a>
							</li>
						</Fragment>
					))
				}
			</ul>
		</div>
	);
}

/**
 * ナビゲーションのフッター
 */
function NavigationFooter(): React.ReactNode {
	return <div className="navigation-footer"></div>;
}

/**
 * 探索済みかどうかを示すオブジェクトを初期化する
 */
function initSearched(): { [id: number]: boolean } {
	const ret: { [id: number]: boolean } = {};
	Object.keys(idTree).forEach(id => ret[Number(id)] = false);
	return ret;
}

/**
 * targetの親を探す
 */
function findParent(searched: { [id: number]: boolean }, target: number) {
	searched[target] = true;
	if (idTree[target].length === 1 && idTree[target].includes(target)) return target;

	for (const id of idTree[target]) {
		if (searched[id]) continue;
		if (id === target) continue;
		return findParent(searched, id);
	}
}

/**
 * targetはbaseの親かどうかを調べる
 */
function isParent(target: number, base: number) {
	//@@todo dfsを使って親を探索するように修正する
	return target < base;
}

/**
 * ナビゲーションドロワー
 */
function NavigationDrawer({hoverId, activeMenuId}: { hoverId: number; activeMenuId: number; }): React.ReactNode {
	let drawerClassName = styles['navigation-drawer'];
	let targetMenuId = hoverId;
	let drawerContents: Setting[] = [];
	let currentSetting: Setting | undefined;

	/**
	 * ナビゲーションドロワーが開いているパターン
	 * ・hoverIdがinvalidIdのとき
	 * 　・activeMenuIdから一番上の親（＊）を取得して、＊が２階層目のメニューを持っているとき
	 * ・hoverIdがinvalidIdでないとき
	 * 　・hoverIdが２階層目のメニューを持っているとき
	 */
	if (targetMenuId === invalidId) {
		const searched = initSearched();
		const topParent = findParent(searched, activeMenuId);
		[currentSetting] = navigationData.filter(setting => setting.id === topParent);

		if (currentSetting !== undefined && currentSetting.children.length > 0) {
			drawerContents = [...currentSetting.children];
			targetMenuId = activeMenuId;
			drawerClassName += ` ${styles['open']}`;
		}
	} else {
		if (isParent(hoverId, activeMenuId)) targetMenuId = activeMenuId;
		[currentSetting] = navigationData.filter(setting => setting.id === hoverId);

		if (currentSetting !== undefined) {
			drawerContents = [...currentSetting.children];
			drawerClassName += ` ${styles['open']}`;
		}
	}

	return (
		<div className={`${drawerClassName}`}>
			<ul className={styles['drawer-list']}>
				{
					drawerContents.map(setting => (
						<Fragment key={setting.id}>
							<li className={styles['drawer-list-item']}>
								<a
									href={setting.path}
									className={
										(idTree[targetMenuId].includes(setting.id))
											? `${styles['drawer-link']} ${styles['active']}`
											: styles['drawer-link']
									}
								>
									<div className={styles['drawer-link-label']}>{setting.label}</div>
								</a>
							</li>
						</Fragment>
					))
				}
			</ul>
		</div>
	);
}
