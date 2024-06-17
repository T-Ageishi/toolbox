import { Meta, StoryObj } from '@storybook/react';
import Description from '@/app/_ui/description/description';

const meta: Meta<typeof Description> = {
  title: 'Description',
  component: Description,
};
export default meta;

type Story = StoryObj<typeof Description>;
export const Default: Story = {
  args: {
    heading: 'ホーム',
    description: `
何らかの説明を記載する。
改行が含まれる場合もあります。    
`,
  },
};