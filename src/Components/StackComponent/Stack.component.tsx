import Styles from './Stack.component.styles';

import type { VariantProps } from 'class-variance-authority';

type BaseProps = {
  direction?: 'row' | 'column';
  gap?: number;
  children?: React.ReactNode;
};
type StackProps = VariantProps<(typeof Styles)['stackContainer']> & BaseProps;

const StackComponent = (props: StackProps): React.ReactNode => {
  return <div className={Styles.stackContainer(props)}>{props.children}</div>;
};

export default StackComponent;
