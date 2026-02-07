import ButtonComponent from '../../Components/Button';
import DropdownComponent from '../../Components/Dropdown';
import StackComponent from '../../Components/StackComponent';
import TextComponent from '../../Components/TextComponent';

import type { Registry } from './registry.types';

const registry: Registry = {
  button: ButtonComponent,
  stack: StackComponent,
  text: TextComponent,
  dropdown: DropdownComponent,
};

export default registry;
