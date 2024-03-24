'use client';
import styles from "./WithNavigation.module.css";
import React, {Fragment, useState} from "react";
import {throttle} from "./../../util/throttle";
import {Setting, MouseEnterHandlerType, MouseMoveHandlerType} from './types';
import {navigationData} from './data';


const invalidId: number = -1;
// 隣接リストの木構造でメニューのIDをまとめる
const idTree: { [key: number]: number[] } = {};
const structIdTree = (parentId: number, settings: Setting[]): void => {
	settings.forEach(setting => {
		if (idTree[parentId] === undefined) idTree[parentId] = [];
		if (idTree[setting.id] === undefined) idTree[setting.id] = [setting.id];

		idTree[parentId] = [...idTree[parentId], setting.id];
		idTree[setting.id] = [...idTree[setting.id], parentId];

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
				<NavigationDrawer hoverId={hoverId}/>
			</div>
			<main className={styles['main-content']}>
				{children}
			</main>
		</div>
	);
}

function NavigationHeader(): React.ReactNode {
	return <div className={styles['navigation-header']}></div>;
}

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

function NavigationFooter(): React.ReactNode {
	return <div className="navigation-footer"></div>;
}

function NavigationDrawer({hoverId}: { hoverId: number }): React.ReactNode {
	let className = styles['navigation-drawer'];
	let drawerContents: Setting[] = [];
	if (hoverId !== invalidId) {
		className += ` ${styles['open']}`;
		const [setting] = navigationData.filter(setting => setting.id === 2);
		drawerContents = [...setting.children];
	}

	return (
		<div className={`${className}`}>
			<ul className={styles['drawer-list']}>
				{
					drawerContents.map(setting => (
						<Fragment key={setting.id}>
							<li className={styles['drawer-list-item']}>
								<a className={styles['drawer-link']} href={setting.path}>
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
