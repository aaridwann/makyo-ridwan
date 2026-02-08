import React from 'react';

import cn from '../../Lib/cn';

import Styles from './Text.component.styles';

import type { TextProps } from './Text.component.types';

/**
 * Text Component
 */
const TextComponent = ({
  as,
  children,
  variant,
  className,
  ...rest
}: TextProps): React.ReactNode => {
  const Component = as || 'span';

  return (
    <Component className={cn(Styles.textRoot({ variant, ...rest }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default TextComponent;
