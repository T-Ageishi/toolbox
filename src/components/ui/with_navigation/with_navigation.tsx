'use client';
import styles from "./with_navigation.module.css";
import React, {Fragment, useState} from "react";
import {throttle} from "@/components/utils/throttle";
import {Setting, MouseEnterHandlerType, MouseMoveHandlerType} from './types';
import {navigationData} from './data';

//初期化したりする用のメニューID
const invalidId: number = -1;
const parents = collectParents(null, navigationData, []);

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
			const target = event.target as HTMLElement;//@@todo as 直したい
			const elm = target.closest(containerSelector);
			if (elm === null) setHoverId(invalidId);
		}, 500)();
	};

	return (
		<div id='root' onPointerMove={event => handlePointerMove(event)}>
			<div className='navigation-container'>
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
	settings, activeMenuId, handleMouseEnter,
}: {
	settings: Setting[]; activeMenuId: number; handleMouseEnter: MouseEnterHandlerType;
}): React.ReactNode {
	return (
		<div className={styles['navigation-body']}>
			<ul className={styles['navigation-list']}>
				{
					settings.map(setting => (
						<Fragment key={setting.id}>
							<li
								className={
									(parents[activeMenuId].has(setting.id) || activeMenuId === setting.id)
										? `${styles['navigation-list-item']} ${styles['active']}`
										: styles['navigation-list-item']
								}
								onMouseEnter={() => handleMouseEnter(setting.id)}
							>
								<a className={styles['navigation-link']} href={setting.path}>
									<div className={`${styles['navigation-link-icon']} material-symbols-outlined`}>{setting.icon}</div>
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
 * ナビゲーションドロワー
 */
function NavigationDrawer({hoverId, activeMenuId}: { hoverId: number; activeMenuId: number; }): React.ReactNode {
	let drawerClassName = styles['navigation-drawer'];
	let drawerContents: Setting[] = [];
	let currentSetting: Setting | undefined;

	[currentSetting] = navigationData.filter(setting => setting.id === hoverId);
	if (currentSetting !== undefined) {
		drawerContents = [...currentSetting.children];
		drawerClassName += ` ${styles['open']}`;
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
										activeMenuId === setting.id ? `${styles['drawer-link']} ${styles['active']}` : styles['drawer-link']
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

/**
 * 各メニューの親を集める
 */
function collectParents(parent: number | null, settings: Setting[], result: Set<number>[]) {
	for (let i = 0; i < settings.length; i++) {
		if (result[settings[i].id] === undefined) result[settings[i].id] = new Set();

		if (parent !== null) result[settings[i].id].add(parent);

		if (settings[i].children.length > 0) {
			collectParents(settings[i].id, settings[i].children, result);
		}
	}
	return result;
}
