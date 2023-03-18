import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Good Morning',
  },
  argTypes: {},
} as Meta<TextProps>;
export const Default: StoryObj<TextProps> = {};
