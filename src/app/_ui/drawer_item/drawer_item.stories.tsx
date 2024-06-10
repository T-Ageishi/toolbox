import { Meta, StoryObj } from '@storybook/react';
import DrawerItem from '@/app/_ui/drawer_item/drawer_item';
import { navigationData } from '@/components/ui/with_navigation/data';

const meta: Meta<typeof DrawerItem> = {
  title: 'Drawer Item',
  component: DrawerItem,
};
export default meta;

type Story = StoryObj<typeof DrawerItem>;
export const Toplevel: Story = {
  args: {
    setting: navigationData[1],
    isActive: false,
  },
};
export const ToplevelActive: Story = {
  args: {
    setting: navigationData[0],
    isActive: true,
  },
};

