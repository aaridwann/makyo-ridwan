import type { buttonRoot } from './Button.component.styles';
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
}

/**
 * CVA variants exposed as types
 */
export type ButtonVariantProps = VariantProps<typeof buttonRoot>;

export type ButtonProps = ButtonBaseProps &
  ButtonVariantProps & {
    children?: React.ReactNode;
  };
