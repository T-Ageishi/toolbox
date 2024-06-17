import { Setting } from '@/app/_types';
import NavigationContent from '@/app/_ui/navigation_content/navigation_content';
import React from 'react';

export default function DrawerItem ({setting, isActive}: { setting: Setting; isActive: boolean; }) {
  return (
    <div className={'drawer-item'}>
      <NavigationContent setting={setting} isActive={isActive}/>
    </div>
  );
}