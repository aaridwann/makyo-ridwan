import { render } from '@testing-library/react';

import hydrate from './hydrate';

jest.mock('../../Data/DataContext', () => ({
  UseData: () => ({
    get: jest.fn(),
    set: jest.fn(),
  }),
}));

const configs = [
  {
    desc: 'simple text',
    payload: {
      roots: [
        {
          id: '1',
          type: 'text',
          children: 'Hello',
        },
      ],
    },
  },
  {
    desc: 'nested nodes',
    payload: {
      roots: [
        {
          id: '1',
          type: 'stack',
          children: [
            {
              id: '2',
              type: 'text',
              children: 'this is a stack',
            },
            {
              id: '2',
              type: 'dropdown',
              props: {
                value: 'Hello',
                size: 'xs',
                placeholder: 'Choose your country',
                label: 'State',
                multiple: true,
                searchable: true,
                outlined: true,
                options: [
                  {
                    value: 'indonesia',
                    label: 'Indonesia',
                  },
                  {
                    value: 'singapore',
                    label: 'Singapore',
                  },
                  {
                    value: 'australia',
                    label: 'Australia',
                  },
                  {
                    value: 'arab',
                    label: 'arab',
                  },
                  {
                    value: 'china',
                    label: 'china',
                  },
                ],
              },
              bind: 'country',
            },
          ],
        },
      ],
    },
  },
];

describe('hydrate()', () => {
  configs.map(({ desc, payload }) => {
    it(desc, () => {
      const { container } = render(<>{hydrate(payload as any)}</>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
