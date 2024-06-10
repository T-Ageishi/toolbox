import { Meta, StoryObj } from '@storybook/react';
import Textarea from '@/app/_ui/textarea/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;
export const VerticallyResizable: Story = {};
export const HorizontallyResizable: Story = {
  args: {
    resize: 'horizontal',
  },
};
export const BothResizable: Story = {
  args: {
    resize: 'both',
  },
};
export const NotResizable: Story = {
  args: {
    resize: 'none',
  },
};