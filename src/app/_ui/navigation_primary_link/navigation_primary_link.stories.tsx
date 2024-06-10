import { Meta, StoryObj } from '@storybook/react';
import NavigationPrimaryLink from '@/app/_ui/navigation_primary_link/navigation_primary_link';

const meta: Meta<typeof NavigationPrimaryLink> = {
  title: 'Navigation Primary Link',
  component: NavigationPrimaryLink,
};
export default meta;

type Story = StoryObj<typeof NavigationPrimaryLink>;
export const Default: Story = {
  args: {
    setting: {
      id: 1,
      label: '',
      icon: 'Search',
      path: '/',
      children: [],
    },
  },
};