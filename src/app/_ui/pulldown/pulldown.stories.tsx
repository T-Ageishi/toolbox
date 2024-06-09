import { Meta, StoryObj } from '@storybook/react';
import PullDown from '@/app/_ui/pulldown/pulldown';

const meta: Meta<typeof PullDown> = {
  title: 'PullDown',
  component: PullDown,
};
export default meta;

type Story = StoryObj<typeof PullDown>;
export const Default: Story = {
  args: {
    selectProps: {
      name: 'f_select',
    },
    optionProperties: [
      {label: 'option 1', value: '1'},
      {label: 'option 2', value: '2'},
    ],
  },
};