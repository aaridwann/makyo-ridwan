import { render } from '@testing-library/react';

import ButtonComponent from './Button.component';

const buttonConfigs: Array<{ desc: string; props: any }> = [
  {
    desc: 'Default button',
    props: {
      children: 'Button',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Primary button',
    props: {
      children: 'Primary',
      intent: 'primary',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Secondary button',
    props: {
      children: 'Secondary',
      intent: 'secondary',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Large button',
    props: {
      children: 'Large',
      size: 'lg',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Full radius button',
    props: {
      children: 'Rounded',
      radius: 'full',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Compact density',
    props: {
      children: 'Compact',
      density: 'compact',
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Loading state',
    props: {
      children: 'Loading',
      loading: true,
      onPress: jest.fn(),
    },
  },
  {
    desc: 'With start icon',
    props: {
      children: 'Icon',
      startIcon: <span>ICON</span>,
      onPress: jest.fn(),
    },
  },
  {
    desc: 'Disabled button',
    props: {
      children: 'Disabled',
      disabled: true,
      onPress: jest.fn(),
    },
  },
];

describe('ButtonComponent snapshots', () => {
  buttonConfigs.forEach(({ desc, props }) => {
    it(`should match snapshot - ${desc}`, () => {
      const { container } = render(<ButtonComponent {...props} />);

      expect(container).toMatchSnapshot();
    });
  });
});
