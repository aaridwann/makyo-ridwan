import { cva } from 'class-variance-authority';

export const buttonRoot = cva(
  `
  inline-flex items-center justify-center
  font-medium transition cursor-pointer
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-primary
  disabled:pointer-events-none disabled:opacity-50 text-white
  `,
  {
    variants: {
      intent: {
        primary: 'bg-blue-500',
        secondary: 'bg-gray-200',
        destructive: 'bg-destructive text-white',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        full: 'w-full h-full',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        full: 'rounded-full',
      },
      density: {
        compact: 'gap-1',
        normal: 'gap-2',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      radius: 'md',
      density: 'normal',
    },
  },
);
