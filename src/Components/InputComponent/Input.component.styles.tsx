import { cva } from 'class-variance-authority';

const inputContainer = cva('flex border-b border-gray-400 px-2 py-2 gap-2 items-center px-4 py-2', {
  variants: {
    size: {
      full: 'w-full',
    },
  },
});
const inputWrapper = cva('outline-0 w-full');

export default {
  inputWrapper,
  inputContainer,
};
