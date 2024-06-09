import React from 'react';
import { NavigationPrimaryLinkProps } from '@/app/_ui/navigation_primary_link/navigation_primary_link.type';
import style from '@/app/_ui/navigation_primary_link/navigation_primary_link.module.css';
import * as Icons from '@mui/icons-material';
import Link from 'next/link';

export default function NavigationPrimaryLink({setting}: NavigationPrimaryLinkProps) {
  const Icon = setting.icon ? Icons[setting.icon] : null;

  return (
    <Link href={setting.path} className={style['ng-primary-link']}>
      {
        Icon === null ? <></> : <Icon/>
      }
    </Link>
  );
}
