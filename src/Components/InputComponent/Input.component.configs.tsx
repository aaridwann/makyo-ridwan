import { noop } from 'lodash';

import type { PropsInput } from './Input.component.types';

const defaultProps: PropsInput = {
  value: '',
  onChange: noop,
  withIcon: true,
  iconColor: 'gray',
};
const displayName = 'InputComponent';

export default {
  defaultProps,
  displayName,
};
