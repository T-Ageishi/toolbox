import { Setting } from '@/app/_types';
import { getLevel } from '@/app/_ui/_lib/navigation/get_level';
import * as Icons from '@mui/icons-material';
import styles from './drawer_item.module.css';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';
import React from 'react';

export default function DrawerItem ({setting, isActive}: { setting: Setting; isActive: boolean; }) {
  const level = getLevel(setting);

  if (level <= 1) {
    return <TopLevel setting={setting} isActive={isActive} />;
  }

  return (
    <></>
  );
}

function TopLevel({setting, isActive}: { setting: Setting; isActive: boolean; }){
  let Icon;
  if (isActive) {
    Icon = setting.activeIcon ? Icons[setting.activeIcon] : null;
  }
  if (!Icon) {
    Icon = setting.icon ? Icons[setting.icon] : null;
  }
  const ArrowForward = setting.children.length === 0 ? null : Icons['ArrowForward'];

  return (
    <div className={mergeClassNames([
      `${styles['drawer-item']}`,
      {
        [`${styles['active']}`]: isActive,
      },
    ])}>
      {Icon ? <Icon className={`${styles['drawer-item-icon']}`}/> : <></>}
      <div className={`${styles['drawer-item-label']}`}>{setting.label}</div>
      {ArrowForward ? <ArrowForward className={`${styles['drawer-item-arrow-icon']}`}/> : <></>}
    </div>
  );
}