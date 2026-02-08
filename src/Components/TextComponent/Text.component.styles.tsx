import { cva } from 'class-variance-authority';

const textRoot = cva('', {
  variants: {
    variant: {
      body: 'text-sm',
      caption: 'text-xs',
      label: 'text-sm font-medium',
      heading: 'text-xl font-semibold',
      subheading: 'text-base font-medium',
      title: 'text-2xl font-bold',
      display: 'text-4xl font-extrabold',
    },
    color: {
      default: 'text-neutral-900',
      muted: 'text-neutral-600',
      subtle: 'text-neutral-500',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600',
      info: 'text-blue-600',
      white: 'text-white',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
    tracking: {
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
    },
    truncate: {
      true: 'truncate',
    },
    multiline: {
      false: 'whitespace-nowrap',
      true: 'whitespace-normal',
    },
    clamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
    },
  },

  compoundVariants: [
    {
      truncate: true,
      multiline: false,
      className: 'overflow-hidden text-ellipsis',
    },
  ],

  defaultVariants: {
    variant: 'body',
    color: 'default',
    weight: 'normal',
    align: 'left',
    multiline: true,
  },
});

export default {
  textRoot,
};
