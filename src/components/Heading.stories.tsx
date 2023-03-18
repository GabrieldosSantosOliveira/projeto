import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';
export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Hello',
  },
  argTypes: {},
} as Meta<HeadingProps>;
export const Default: StoryObj<HeadingProps> = {};
