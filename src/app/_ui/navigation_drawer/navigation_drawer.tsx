import { Setting } from '@/app/_types';
import styles from './navigation_drawer.module.css';
import * as Icons from '@mui/icons-material';
import Link from 'next/link';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';
import React from 'react';
import { isActive } from '@/app/_ui/_lib/navigation/is_active';

export default function NavigationDrawer({settings, pathname}: { settings: Setting[]; pathname: string; }) {
  return (
    <div className={`${styles['navigation-drawer']} ${styles['open']}`}>
    </div>
  );
}
