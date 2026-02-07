import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: object[]): string => {
  return twMerge(clsx(inputs));
};
