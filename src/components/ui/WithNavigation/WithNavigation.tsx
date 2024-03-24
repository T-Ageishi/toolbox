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
export default function WithNavigation({children}: { children: React.ReactNode; }) {
	const [activeId, setActiveId] = useState(-1);

	//ナビゲーションのリンクにポインターが重なったときのイベントハンドラ
	const handleMouseEnter: MouseEnterHandlerType = id => {
		const [setting] = settings.filter(s => s['id'] === id);
		if (setting['children'].length === 0) {
			if (activeId !== -1) setActiveId(-1);
		} else {
			setActiveId(id);
		}
	};

	const handlePointerMove: MouseMoveHandlerType = event => {
		throttle(() => {
			const containerSelector = '.navigation-container';
			const target = event.target as HTMLElement;
			const elm = target.closest(containerSelector);
			if (elm === null) setActiveId(-1);
		}, 500)();
	};

	return (
		<div id="root" onPointerMove={event => handlePointerMove(event)}>
			<div className="navigation-container">
				<nav className={styles['navigation']}>
					<NavigationHeader/>
					<NavigationBody
						settings={settings}
						handleMouseEnter={handleMouseEnter}
					/>
					<NavigationFooter/>
				</nav>
				<NavigationDrawer activeId={activeId}/>
			</div>
			<main className={styles['main-content']}>
				{children}
			</main>
		</div>
	);
}

function NavigationBody({
	settings,
	handleMouseEnter,
}: {
	settings: Setting[],
	handleMouseEnter: MouseEnterHandlerType,
}): React.ReactNode {
	return (
		<div className={styles['navigation-body']}>
			<NavigationList
				settings={settings}
				handleMouseEnter={handleMouseEnter}
			/>
		</div>
	);
}

function NavigationList({
	settings,
	handleMouseEnter,
}: {
	settings: Setting[],
	handleMouseEnter: MouseEnterHandlerType,
}): React.ReactNode {
	return (
		<ul className={styles['navigation-list']}>
			{
				settings.map(setting => (
					<Fragment key={setting.id}>
						<li
							className={styles['navigation-list-item']}
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

function NavigationDrawer({activeId}: { activeId: number }): React.ReactNode {
	let className = styles['navigation-drawer'];
	if (activeId !== -1) {
		className += ` ${styles['open']}`;
	}

	return (
		<div className={`${className}`}></div>
	);
}

function NavigationHeader(): React.ReactNode {
	return <div className={styles['navigation-header']}></div>;
}

function NavigationFooter(): React.ReactNode {
	return <div className="navigation-footer"></div>;
}
