import React from 'react';
import NavigationRail from '@/app/_ui/navigation_rail/navigation_rail';
import { Setting } from '@/app/_types';

export default function WithNavigation ({
  children, navigationData,
}: { children: React.ReactNode; navigationData: Setting[] }) {
  return (
    <>
      <NavigationRail settings={navigationData}/>
      {children}
    </>
  );
}