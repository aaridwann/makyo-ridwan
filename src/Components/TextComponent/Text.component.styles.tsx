import { cva } from 'class-variance-authority';

export const textRoot = cva('', {
  variants: {
    variant: {
      body: 'text-sm text-neutral-900',
      caption: 'text-xs text-neutral-600',
      label: 'text-sm font-medium',
      heading: 'text-xl font-semibold',
      subheading: 'text-base font-medium',
    },
  },

  defaultVariants: {
    variant: 'body',
  },
});
