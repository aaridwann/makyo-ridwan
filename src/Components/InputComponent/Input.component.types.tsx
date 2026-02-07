import type Styles from './Input.component.styles';
import type { VariantProps } from 'class-variance-authority';
import type { ChangeEvent } from 'react';

export type BaseProps = {
  value: string;
  onChange: (value: string) => void;
  withIcon?: boolean;
  iconColor?: string;
  onReset?: VoidFunction;
};

export type ChangeHandler = (
  props: BaseProps,
) => (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;

export type ButtonVariantProps = VariantProps<(typeof Styles)['inputContainer']>;

export type PropsInput = BaseProps & ButtonVariantProps;
