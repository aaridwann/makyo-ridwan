import React from 'react';

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
    <Component className={Styles.textRoot({ variant, className, ...rest })} {...rest}>
      {children}
    </Component>
  );
};

export default TextComponent;
