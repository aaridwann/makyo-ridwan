import { render } from '@testing-library/react';
import { noop } from 'lodash';

import DropdownComponent from './Dropdown.component';

import type { DropdownProps } from './Dropdown.component.types';

const defaultProps: DropdownProps = {
  options: [],
  value: [],
  onChange: noop,
  multiple: true,
  searchable: true,
  portal: false,
  placeholder: 'choose something',
  outlined: true,
  filtering: true,
};

const dropdownConfigs: Array<{ desc: string; props: DropdownProps }> = [
  {
    desc: 'Single select, not searchable',
    props: {
      ...defaultProps,
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
      multiple: false,
      searchable: false,
      portal: false,
    },
  },
  {
    desc: 'Multi select, searchable',
    props: {
      ...defaultProps,
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ],
      multiple: true,
      searchable: true,
      portal: false,
    },
  },
  {
    desc: 'Single select, searchable, with portal',
    props: {
      ...defaultProps,
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
      ],
      multiple: false,
      searchable: true,
      portal: true,
    },
  },
];

describe('DropdownComponent snapshots', () => {
  dropdownConfigs.forEach(({ desc, props }) => {
    it(`should match snapshot - ${desc}`, () => {
      const { container } = render(<DropdownComponent {...props} />);

      expect(container).toMatchSnapshot();
    });
  });
});
