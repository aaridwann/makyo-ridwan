import cn from '../../Lib/cn';

import Styles from './Stack.component.styles';

import type { StackProps } from './Stack.component.types';
import type React from 'react';

/**
 * Stack Component
 * @param {StackProps} props - Props
 * @returns {React.ReactNode} - Stack Component
 */
const StackComponent = (props: StackProps): React.ReactNode => {
  const { direction, align, justify, wrap, gap } = props;

  return (
    <div
      className={cn(
        Styles.stackContainer({ direction, align, justify, wrap, gap }),
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export default StackComponent;
