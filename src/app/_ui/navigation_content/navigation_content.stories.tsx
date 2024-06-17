import { Meta, StoryObj } from '@storybook/react';
import NavigationContent from '@/app/_ui/navigation_content/navigation_content';
import { navigationData } from '@/app/_ui/_lib/navigation/data';

const meta: Meta<typeof NavigationContent> = {
  title: 'Navigation Content',
  component: NavigationContent,
};
export default meta;

type Story = StoryObj<typeof NavigationContent>;
export const Level1: Story = {
  args: {
    setting: navigationData[1],
    isActive: true,
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

export const Level2: Story = {
  args: {
    setting: navigationData[1].children[0],
    isActive: false,
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