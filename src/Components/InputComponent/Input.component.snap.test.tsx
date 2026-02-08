import { render } from '@testing-library/react';

import InputComponent from './Input.component';

const inputConfigs: Array<{ desc: string; props: any }> = [
  {
    desc: 'Default input, empty value',
    props: { value: '', onChange: jest.fn() },
  },
  {
    desc: 'Input with text value',
    props: { value: 'Hello', onChange: jest.fn() },
  },
  {
    desc: 'Input with reset icon',
    props: { value: 'Test', onChange: jest.fn(), onReset: jest.fn() },
  },
  {
    desc: 'Input with icon disabled',
    props: { value: '', onChange: jest.fn(), withIcon: true },
  },
];

describe('InputComponent snapshots', () => {
  inputConfigs.forEach(({ desc, props }) => {
    it(`should match snapshot - ${desc}`, () => {
      const { container } = render(<InputComponent {...props} />);

      expect(container).toMatchSnapshot();
    });
  });
});
