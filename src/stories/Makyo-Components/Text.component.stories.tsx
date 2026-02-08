/* eslint-disable storybook/no-renderer-packages */
import TextComponent from '../../Components/TextComponent';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof TextComponent>;

const meta: Meta<typeof TextComponent> = {
  title: 'Components/Text',
  component: TextComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'caption', 'label', 'heading', 'subheading', 'title', 'display'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'muted',
        'subtle',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'white',
      ],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    italic: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
    tracking: {
      control: 'select',
      options: ['tight', 'normal', 'wide'],
    },
    truncate: {
      control: 'boolean',
    },
    multiline: {
      control: 'boolean',
    },
    clamp: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
};

export default meta;

export const Playground: Story = {
  args: {
    children: 'Edit me from controls',
    variant: 'body',
    color: 'default',
    weight: 'normal',
    align: 'left',
    italic: false,
    underline: false,
    tracking: 'normal',
    truncate: false,
    multiline: true,
  },
};
const variants = ['body', 'caption', 'label', 'heading', 'subheading', 'title', 'display'] as const;
const colors = [
  'default',
  'muted',
  'subtle',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
] as const;

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      {variants.map((variant) => (
        <div key={variant} className="space-y-2">
          <TextComponent variant="label" color="muted">
            {variant.toUpperCase()}
          </TextComponent>

          {colors.map((color) => (
            <TextComponent key={color} variant={variant} color={color}>
              {variant} / {color}
            </TextComponent>
          ))}
        </div>
      ))}
    </div>
  ),
};
