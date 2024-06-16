import { Meta, StoryObj } from '@storybook/react';
import DrawerItem from '@/app/_ui/drawer_item/drawer_item';
import { navigationData } from '@/app/_ui/_lib/navigation/data';

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
    setting: navigationData[1],
    isActive: true,
  },
};

export const Children: Story = {
  args: {
    setting: navigationData[1].children[0],
    isActive: false,
  },
};

export const ChildrenActive: Story = {
  args: {
    setting: navigationData[1].children[0],
    isActive: true,
  },
};

