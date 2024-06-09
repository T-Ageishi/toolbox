'use client';

import styles from '@/app/_ui/navigation_rail/navigation_rail.module.css';
import { NavigationRailProps } from '@/app/_ui/navigation_rail/navigation_rail.types';
import NavigationLink from '@/app/_ui/navigation_link/navigation_link';
import { Setting } from '@/app/_types';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { isActive } from '@/app/_ui/_lib/navigation/is_active';

export default function NavigationRail ({settings}: NavigationRailProps) {
  const pathname = usePathname();

  return (
    <div className={styles['navigation-rail']}>
      <Body settings={settings} pathname={pathname}/>
      <Footer/>
    </div>
  );
}

function Body ({settings, pathname}: { settings: Setting[]; pathname: string; }) {
  return (
    <div className={styles['navigation-rail-body']}>
      {
        settings.map(setting => (
          <Fragment key={setting.id}>
            <NavigationLink setting={setting} isActive={isActive(pathname, setting.path)}/>
          </Fragment>
        ))
      }
    </div>
  );
}

function Footer () {
  return (
    <div className={styles['navigation-rail-footer']}></div>
  );
}