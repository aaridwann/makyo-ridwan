import { forwardRef } from 'react';

import { textRoot } from './Text.component.styles';

import type { TextProps } from './Text.component.types';
import type { ElementType } from 'react';

export const TextComponent = forwardRef(
  <T extends ElementType = 'span'>(
    { as, children, variant, className, ...props }: TextProps<T>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as || 'span';

    return (
      <Component ref={ref} className={textRoot({ variant, className })} {...props}>
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';

export default TextComponent;
