import { Meta, StoryObj } from '@storybook/react';
import NavigationLink from '@/app/_ui/navigation_link/navigation_link';

const meta: Meta<typeof NavigationLink> = {
  title: 'Navigation Link',
  component: NavigationLink,
};
export default meta;

type Story = StoryObj<typeof NavigationLink>;
export const Default: Story = {
  args: {
    setting: {
      id: 1,
      label: 'ホーム',
      icon: 'Home',
      path: '/',
      children: [],
    },
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    setting: {
      id: 1,
      label: 'ホーム',
      icon: 'Home',
      path: '/',
      children: [],
    },
    isActive: true,
  },
};