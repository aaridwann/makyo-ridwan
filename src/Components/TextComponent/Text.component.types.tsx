import type Styles from './Text.component.styles';
import type { VariantProps } from 'class-variance-authority';
import type { ElementType, ReactNode } from 'react';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading' | 'subheading';

export type TextProps<T extends ElementType = 'span'> = VariantProps<
  (typeof Styles)['textRoot']
> & {
  as?: T;
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export type Configs = {
  desc: string;
  props?: TextProps;
  children?: React.ReactNode;
};

export type configsTest = { desc: string; props?: Partial<TextProps>; children: ReactNode };
