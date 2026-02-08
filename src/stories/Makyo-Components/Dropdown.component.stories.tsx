/* eslint-disable storybook/no-renderer-packages */
import DropdownComponent from '../../Components/Dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Dropdown',
  component: DropdownComponent,
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Banana', value: 'banana' },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'choose your favorite',
  },
};

export const Searchable: Story = {
  args: {
    options,
    searchable: true,
    placeholder: 'choose your favorite',
  },
};

export const Multiple: Story = {
  args: {
    options,
    multiple: true,
    placeholder: 'choose your favorite',
  },
};
