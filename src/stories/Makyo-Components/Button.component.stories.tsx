/* eslint-disable storybook/no-renderer-packages */
import ButtonComponent from '../../Components/ButtonComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,

  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost'],
    },

    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },

    radius: {
      control: 'select',
      options: ['sm', 'md', 'full'],
    },

    density: {
      control: 'select',
      options: ['compact', 'normal'],
    },

    loading: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    onPress: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

//
// 🔹 Playground
//
export const Playground: Story = {
  args: {
    children: 'Click Me',
    intent: 'primary',
    size: 'md',
    radius: 'md',
    density: 'normal',
    loading: false,
    disabled: false,
  },
};

//
// 🔹 Variants Showcase
//
const intents = ['primary', 'secondary', 'destructive', 'ghost'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export const Variants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      {intents.map((intent) => (
        <div key={intent} className="space-y-3">
          <div className="text-sm font-medium">{intent}</div>

          <div className="flex gap-4 flex-wrap">
            {sizes.map((size) => (
              <ButtonComponent key={size} intent={intent} size={size}>
                {intent} {size}
              </ButtonComponent>
            ))}

            <ButtonComponent intent={intent} loading>
              Loading
            </ButtonComponent>

            <ButtonComponent intent={intent} disabled>
              Disabled
            </ButtonComponent>
          </div>
        </div>
      ))}
    </div>
  ),
};
