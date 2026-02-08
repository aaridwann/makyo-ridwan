/* eslint-disable storybook/no-renderer-packages */
import InputComponent from '../../Components/InputComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

const configs = [
  {
    desc: 'Empty',
    props: {
      value: '',
      onChange: () => {},
    },
  },
  {
    desc: 'With value',
    props: {
      value: 'Hello',
      onChange: () => {},
    },
  },
  {
    desc: 'With reset',
    props: {
      value: 'Search',
      onChange: () => {},
      onReset: () => {},
    },
  },
];

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      {configs.map(({ desc, props }) => (
        <InputComponent key={desc} {...props} />
      ))}
    </div>
  ),
};
