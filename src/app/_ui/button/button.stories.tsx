import { Meta, StoryObj } from '@storybook/react';
import Button from '@/app/_ui/button/button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    label: 'Filled',
  },
};
export const Tonal: Story = {
  args: {
    variant: 'tonal',
    size: 'medium',
    label: 'Tonal',
  },
};
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    label: 'Outlined',
  },
};
export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    label: 'Danger Button',
  },
};