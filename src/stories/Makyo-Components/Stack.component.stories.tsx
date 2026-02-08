/* eslint-disable storybook/no-renderer-packages */

import React from 'react';

import ButtonComponent from '../../Components/ButtonComponent';
import DropdownComponent from '../../Components/Dropdown';
import InputComponent from '../../Components/InputComponent';
import StackComponent from '../../Components/StackComponent';
import TextComponent from '../../Components/TextComponent';

import type { Meta, StoryObj } from '@storybook/react';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Banana', value: 'banana' },
];

const meta: Meta<typeof StackComponent> = {
  title: 'Components/Stack',
  component: StackComponent,
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    wrap: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof StackComponent>;

export const ColumnLayout: Story = {
  args: {
    direction: 'column',
    gap: 'md',
    align: 'start',
    justify: 'start',
    wrap: false,

    children: (
      <React.Fragment>
        <TextComponent variant="heading">Form Example</TextComponent>
        <InputComponent value="This is a value" onChange={() => {}} />
        <DropdownComponent
          placeholder="Choose your favorite fruits"
          options={options}
          searchable
          multiple
        />
        <ButtonComponent intent="primary">Submit</ButtonComponent>
      </React.Fragment>
    ),
  },
};

export const RowLayout: Story = {
  args: {
    direction: 'row',
    align: 'center',
    gap: 'sm',
    wrap: false,
    children: (
      <React.Fragment>
        <TextComponent>Search</TextComponent>
        <InputComponent value="" onChange={() => {}} />
        <ButtonComponent intent="secondary">Go</ButtonComponent>
        <DropdownComponent
          placeholder="Choose your favorite fruits"
          options={options}
          searchable
          multiple
        />
      </React.Fragment>
    ),
  },
};
