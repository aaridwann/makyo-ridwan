import { cva } from 'class-variance-authority';

const size = {
  xs: 'min-w-sm',
  sm: 'max-w-md',
  md: 'min-w-lg',
  lg: 'min-w-xl',
  xl: 'max-w-3xl',
};

const container = cva('relative h-12 flex w-full items-center rounded', {
  variants: {
    outlined: {
      true: 'outline outline-gray-200 bg-transparent',
      false: 'bg-blue-500 text-white',
    },
    size,
  },
  defaultVariants: {
    outlined: true,
    size: 'xl',
  },
});
const wrapperSelectedValue = cva('flex gap-1 z-10');
const itemSelectedValue = cva(
  'flex items-center justify-center mx-2 gap-1 bg-gray-200 rounded-2xl px-3 py-2',
);
const closeCircleButton = cva('cursor-pointer');
const wrapperContent = cva('mt-2 rounded outline outline-gray-200 bg-white shadow', {
  variants: {
    size,
  },
  defaultVariants: {
    size: 'xl',
  },
});
const invisibleButton = cva('w-full h-full bg-white');
const listOptionItems = cva('cursor-pointer px-3 py-2 hover:bg-blue-100/40');
const chevronIcon = cva('mr-4');

export default {
  container,
  wrapperSelectedValue,
  itemSelectedValue,
  closeCircleButton,
  wrapperContent,
  invisibleButton,
  listOptionItems,
  chevronIcon,
};
