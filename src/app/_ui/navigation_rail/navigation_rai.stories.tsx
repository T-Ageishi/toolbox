import { Meta, StoryObj } from '@storybook/react';
import NavigationRail from '@/app/_ui/navigation_rail/navigation_rail';
import { navigationData } from '@/components/ui/with_navigation/data';

const meta: Meta<typeof NavigationRail> = {
  title: 'Navigation Rail',
  component: NavigationRail,
};
export default meta;

type Story = StoryObj<typeof NavigationRail>;
export const Home: Story = {
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
export const Others: Story = {
  args: {
    settings: navigationData,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/development/base64',
      },
    },
  },
};