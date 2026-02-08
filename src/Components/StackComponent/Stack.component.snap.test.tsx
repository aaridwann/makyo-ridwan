import { render } from '@testing-library/react';

import StackComponent from './Stack.component';

const configs: Array<{ desc: string; props: any }> = [
  {
    desc: 'Default stack',
    props: {
      children: <div>Item</div>,
    },
  },
  {
    desc: 'Row direction',
    props: {
      direction: 'row',
      children: (
        <>
          <div>A</div>
          <div>B</div>
        </>
      ),
    },
  },
  {
    desc: 'Centered stack with gap',
    props: {
      align: 'center',
      justify: 'center',
      gap: 'lg',
      children: <div>Centered</div>,
    },
  },
  {
    desc: 'Wrapped stack',
    props: {
      wrap: true,
      children: (
        <>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </>
      ),
    },
  },
  {
    desc: 'Full variant stack',
    props: {
      direction: 'row',
      align: 'center',
      justify: 'between',
      gap: 'xl',
      children: (
        <>
          <span>Left</span>
          <span>Right</span>
        </>
      ),
    },
  },
];

describe('StackComponent snapshots', () => {
  configs.forEach(({ desc, props }) => {
    it(`should match snapshot - ${desc}`, () => {
      const { container } = render(<StackComponent {...props} />);

      expect(container).toMatchSnapshot();
    });
  });
});
