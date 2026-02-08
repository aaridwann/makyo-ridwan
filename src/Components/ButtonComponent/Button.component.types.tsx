import type Styles from './Button.component.styles';
import type { VariantProps } from 'class-variance-authority';

export interface ButtonBaseProps {
  id?: string;
  bind?: string;
  ariaLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onPress?: () => void;
  className?: string;
}

/**
 * CVA variants exposed as types
 */
export type ButtonVariantProps = VariantProps<(typeof Styles)['buttonRoot']>;

export type ButtonProps = ButtonBaseProps &
  ButtonVariantProps & {
    children?: React.ReactNode;
  };
