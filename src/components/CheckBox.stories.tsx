import { Meta, StoryObj } from '@storybook/react';

import { CheckBox, CheckBoxProps } from './CheckBox';
export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
} as Meta<CheckBoxProps>;
export const Default: StoryObj<CheckBoxProps> = {
  render: () => (
    <label>
      <CheckBox />
      Lembrar
    </label>
  ),
};
