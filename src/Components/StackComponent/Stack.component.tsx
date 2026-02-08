import Styles from './Stack.component.styles';

import type { StackProps } from './Stack.component.types';
import type React from 'react';

/**
 * Stack Component
 * @param {StackProps} props - Props
 * @returns {React.ReactNode} - Stack Component
 */
const StackComponent = (props: StackProps): React.ReactNode => {
  return <div className={Styles.stackContainer(props)}>{props.children}</div>;
};

export default StackComponent;
