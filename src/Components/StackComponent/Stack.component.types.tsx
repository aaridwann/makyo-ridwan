import type Styles from './Stack.component.styles';
import type { VariantProps } from 'class-variance-authority';

export type BaseProps = {
  direction?: 'row' | 'column';
  gap?: number;
  children?: React.ReactNode;
};

export type StackProps = VariantProps<(typeof Styles)['stackContainer']> & BaseProps;
