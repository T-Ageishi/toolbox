'use client';
import styles from "./WithNavigation.module.css";
import React, {Fragment, useState} from "react";
import {throttle} from "./../../util/throttle";

type Setting = {
	id: number;
	label: string;
	icon: string;
	path: string;
	children: Setting[];
};
type MouseEnterHandlerType = (id: number) => void;
type MouseMoveHandlerType = (event: React.MouseEvent<HTMLElement>) => void;

const invalidId = -1;
const settings: Setting[] = [
	{id: 1, label: 'ホーム', icon: 'Home', path: '/', children: []},
	{
		id: 2, label: '開発', icon: 'Code', path: '/development', children: [
			{id: 3, label: 'base64 encode/decode', icon: '', path: '/development/base64', children: []},
			{id: 4, label: 'PHP serialize/unserialize', icon: '', path: '/development/serialize', children: []},
		]
	},
];

/**
 * ナビゲーションドロワー付きのレイアウト
 */
export default function WithNavigation({
	children,
	activeId //現在選択されているメニューのid
}: {
	children: React.ReactNode;
	activeId: number;
}) {
	const [hoverId, setHoverId] = useState(invalidId);

	//ナビゲーションのリンクにポインターが重なったときのイベントハンドラ
	const handleMouseEnter: MouseEnterHandlerType = id => {
		const [setting] = settings.filter(s => s.id === id);
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
						settings={settings}
						activeId={activeId}
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

function NavigationBody({
	settings,
	activeId,
	handleMouseEnter,
}: {
	settings: Setting[];
	activeId: number;
	handleMouseEnter: MouseEnterHandlerType;
}): React.ReactNode {
	return (
		<div className={styles['navigation-body']}>
			<NavigationList
				settings={settings}
				activeId={activeId}
				handleMouseEnter={handleMouseEnter}
			/>
		</div>
	);
}

function NavigationList({
	settings,
	activeId,
	handleMouseEnter,
}: {
	settings: Setting[];
	activeId: number;
	handleMouseEnter: MouseEnterHandlerType;
}): React.ReactNode {
	return (
		<ul className={styles['navigation-list']}>
			{
				settings.map(setting => (
					<Fragment key={setting.id}>
						<li
							className={
								(setting.id === activeId)
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
	);
}

function NavigationDrawer({hoverId}: { hoverId: number }): React.ReactNode {
	let className = styles['navigation-drawer'];
	let drawerContents: Setting[] = [];
	if (hoverId !== invalidId) {
		className += ` ${styles['open']}`;
		const [setting] = settings.filter(setting => setting.id === 2);
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

function NavigationHeader(): React.ReactNode {
	return <div className={styles['navigation-header']}></div>;
}

function NavigationFooter(): React.ReactNode {
	return <div className="navigation-footer"></div>;
}
