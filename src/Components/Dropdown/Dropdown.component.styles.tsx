import { cva } from 'class-variance-authority';

const container = cva(
  'relative max-w-7xl h-12 flex items-center rounded outline outline-gray-400 ',
);
const wrapperSelectedValue = cva('flex gap-1 z-10');
const itemSelectedValue = cva(
  'flex items-center justify-center mx-2 gap-1 bg-gray-300 rounded-2xl px-3 py-2',
);
const closeCircleButton = cva('cursor-pointer');
const wrapperContent = cva('mt-2 max-w-7xl rounded outline outline-neutral-400 bg-white shadow');
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
