import { render } from '@testing-library/react';

import TextComponent from './Text.component';

import type { Configs } from './Text.component.types';

const cases: Configs[] = [
  {
    desc: 'default',
    children: 'Hello',
  },
  {
    desc: 'heading variant',
    props: {
      variant: 'heading',
    },
    children: 'Heading',
  },
  {
    desc: 'as paragraph',
    props: {
      as: 'p',
    },
    children: 'Paragraph',
  },
  {
    desc: 'colored + bold',
    props: {
      color: 'primary',
      weight: 'bold',
    },
    children: 'Colored',
  },
  {
    desc: 'truncate',
    props: {
      truncate: true,
      multiline: false,
    },
    children: 'Very long text here',
  },
  {
    desc: 'title',
    props: {
      as: 'h1',
      truncate: true,
      multiline: false,
    },
    children: 'Title text',
  },
];

describe('TextComponent snapshots', () => {
  cases.map(({ desc, props, children }) => {
    it(desc, () => {
      const { container } = render(<TextComponent {...props}>{children}</TextComponent>);

      expect(container).toMatchSnapshot();
    });
  });
});
