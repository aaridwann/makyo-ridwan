import * as React from 'react';

import { buttonRoot } from './Button.component.styles';

import type { ButtonProps } from './Button.component.types';

/**
 * get Button props
 * @param {ButtonProps} props - Props of button
 * @returns {React.ReactNode} - Button Component Primitive
 */
const _getButtonProps = (props: ButtonProps): React.ButtonHTMLAttributes<HTMLButtonElement> => {
  const { loading, disabled, ariaLabel, onPress, ...variants } = props;

  return {
    'aria-label': ariaLabel,
    disabled: disabled || loading,
    onClick: onPress,
    className: buttonRoot(variants),
  };
};

/**
 *
 * @param {ButtonProps} props - Props of button
 * @returns {React.ReactNode} - Button Component Primitive
 */
const ButtonComponent = (props: ButtonProps): React.ReactNode => {
  const { children, startIcon, endIcon, loading } = props;

  return (
    <button {..._getButtonProps(props)}>
      {startIcon}
      {loading ? 'Loading...' : children}
      {endIcon}
    </button>
  );
};

ButtonComponent.displayName = 'PrimitiveButton';

export default ButtonComponent;
