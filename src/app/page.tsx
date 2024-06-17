import { navigationData } from '@/app/_ui/_lib/navigation/data';
import WithNavigation from '@/app/_ui/with_navigation/with_navigation';
import Description from '@/app/_ui/description/description';
import Main from '@/features/home/components/main/main';
import React from 'react';

export default function Home () {
  return (
    <WithNavigation navigationData={navigationData}>
      <main className={'page-main-content'}>
        <Description heading={'Home'} description={''}/>
        <Main/>
      </main>
    </WithNavigation>
  );
}
