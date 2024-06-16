import { Setting } from '@/app/_types';
import Link from 'next/link';
import * as Icons from '@mui/icons-material';
import { getLevel } from '@/app/_ui/_lib/navigation/get_level';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';
import styles from '@/app/_ui/navigation_content/navigation_content.module.css';
import React from 'react';

export default function NavigationContent ({setting, isActive}: { setting: Setting; isActive: boolean; }) {
  const level = getLevel(setting);

  if (level === 1) {
    return <NavigationContentTopLevel setting={setting} isActive={isActive} level={level}/>;
  }

  return (
    <Link
      href={setting.path}
      className={mergeClassNames([
        `${styles['navigation-content']}`,
        {
          [`${styles['active']}`]: isActive,
        },
      ])}
      data-level={level}
    >
      <div className={`${styles['navigation-content-label']}`}>{setting.label}</div>
    </Link>
  );
}

/**
 * 1階層目のコンテンツ
 * @param setting
 * @param isActive
 * @param level
 * @constructor
 */
function NavigationContentTopLevel ({setting, isActive, level}: {
  setting: Setting;
  isActive: boolean;
  level: number;
}) {
  let Icon = setting.icon ? Icons[setting.icon] : null;
  if (isActive && setting.activeIcon) {
    Icon = Icons[setting.activeIcon];
  }

  return (
    <Link
      href={setting.path}
      className={mergeClassNames([
        `${styles['navigation-content']}`,
        {
          [`${styles['active']}`]: isActive,
        },
      ])}
      data-level={level}
    >
      <div className={`${styles['navigation-content-icon']}`}>{Icon ? <Icon/> : <></>}</div>
      <div className={`${styles['navigation-content-label']}`}>{setting.label}</div>
    </Link>
  );
}