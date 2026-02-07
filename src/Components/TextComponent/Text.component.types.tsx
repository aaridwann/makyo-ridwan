import type { ElementType, ReactNode } from 'react';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading' | 'subheading';

export type TextProps<T extends ElementType = 'span'> = {
  as?: T;
  children: ReactNode;
  variant?: TextVariant;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;
