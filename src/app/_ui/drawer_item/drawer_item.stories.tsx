import {Meta, StoryObj} from "@storybook/react";
import DrawerItem from "@/app/_ui/drawer_item/drawer_item";

const meta: Meta<typeof DrawerItem> = {
	title: 'Drawer Item',
	component: DrawerItem,
};
export default meta;

type Story = StoryObj<typeof DrawerItem>;
export const Toplevel: Story = {
	args: {
		setting: {
			id: 2,
			label: '開発',
			icon: 'Code',
			path: '/development',
			children: [],
		},
		isActive: false,
	}
}

