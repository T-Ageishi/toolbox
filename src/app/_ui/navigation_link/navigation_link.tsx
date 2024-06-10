import Link from 'next/link';
import * as Icons from '@mui/icons-material';
import React from 'react';
import styles from '@/app/_ui/navigation_link/navigation_link.module.css';
import { NavigationLinkProps } from '@/app/_ui/navigation_link/navigation_link.types';
import { mergeClassNames } from '@/app/_ui/_lib/merge_class_names';

export default function NavigationLink({setting, isActive}: NavigationLinkProps) {
  const Icon = setting.icon ? Icons[setting.icon] : null;

  return (
    <Link
      href={setting.path}
      className={mergeClassNames([
        `${styles['navigation-link']}`,
        {
          [`${styles['active']}`]: isActive,
        },
      ])}
    >
      <div className={`${styles['navigation-link-icon']}`}>{Icon ? <Icon/> : <></>}</div>
      <div className={`${styles['navigation-link-label']}`}>{setting.label}</div>
    </Link>
  );
}