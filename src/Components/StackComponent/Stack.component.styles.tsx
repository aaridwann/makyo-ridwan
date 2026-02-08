import { cva } from 'class-variance-authority';

const stackContainer = cva('flex w-full box-border', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },

    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },

    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },

    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },

    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },

  defaultVariants: {
    direction: 'column',
    align: 'start',
    justify: 'start',
    wrap: false,
    gap: 'md',
  },
});

export default { stackContainer };
