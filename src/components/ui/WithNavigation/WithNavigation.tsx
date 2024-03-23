'use client';
import styles from "./WithNavigation.module.css";
import React, {Fragment, MouseEventHandler, useState} from "react";

type Setting = {
  id: number;
  label: string;
  icon: string;
  path: string;
  childIds: number[];
};

const settings: Setting[] = [
  {id: 1, label: 'ホーム', icon: 'Home', path: '/', childIds: []},
  {id: 2, label: '開発', icon: 'Code', path: '/development', childIds: []},
];

/**
 * ナビゲーションドロワー付きのレイアウト
 */
export default function WithNavigation({children}: { children: React.ReactNode; }) {
  //ドロワーが開いているか
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <div id="root">
      <div className="navigation-wrapper">
        <nav className={styles['navigation']}>
          <NavigationHeader />
          <NavigationBody
            settings={settings}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          <NavigationFooter/>
        </nav>
        <NavigationDrawer open={open}/>
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
  handleMouseLeave
}: {
  settings: Setting[],
  handleMouseEnter:MouseEventHandler<HTMLElement>,
  handleMouseLeave:MouseEventHandler<HTMLElement>,
}): React.ReactNode {
  return (
    <div className={styles['navigation-body']}>
      <NavigationList
        settings={settings}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

function NavigationList({
  settings,
  handleMouseEnter,
  handleMouseLeave
}: {
  settings: Setting[],
  handleMouseEnter:MouseEventHandler<HTMLElement>,
  handleMouseLeave:MouseEventHandler<HTMLElement>,
}): React.ReactNode {
  return (
    <ul className={styles['navigation-list']}>
      {
        settings.map(setting => (
          <Fragment key={setting.id}>
            <li
              className={styles['navigation-list-item']}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
  );
}

function NavigationDrawer({open}: {open: boolean}): React.ReactNode{
  let className = styles['navigation-drawer'];
  if(open){
    className += ` ${styles['open']}`;
  }

  return (
    <div className={`${className}`}></div>
  );
}

function NavigationHeader(): React.ReactNode{
  return (
    <div className={styles['navigation-header']}></div>
  );
}

function NavigationFooter(): React.ReactNode{
  return (
    <div className="navigation-footer"></div>
  );
}
