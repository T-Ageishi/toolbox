import { Meta, StoryObj } from '@storybook/react';
import { navigationData } from '@/components/ui/with_navigation/data';
import NavigationDrawer from '@/app/_ui/navigation_drawer/navigation_drawer';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Navigation Drawer',
  component: NavigationDrawer,
};
export default meta;

type Story = StoryObj<typeof NavigationDrawer>;
export const Default: Story = {
  args: {
    settings: navigationData,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
};