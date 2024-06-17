import { Meta, StoryObj } from '@storybook/react';
import Card from '@/app/_ui/card/card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;
export const Default: Story = {
  args: {
    headline: 'Headline',
    subhead: 'subhead',
    supportingText: '何らかの説明を記載します。',
  },
};