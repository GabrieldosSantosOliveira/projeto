import { Meta, StoryObj } from '@storybook/react';
import { BiEnvelope } from 'react-icons/bi';

import { TextInput } from './';
import { TextInputRootProps } from './Root';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <>
        <BiEnvelope />
        <TextInput.Input />
      </>,
    ],
  },
  argTypes: {},
} as Meta<TextInputRootProps>;
export const Default: StoryObj<TextInputRootProps> = {};
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input />,
  },
};
