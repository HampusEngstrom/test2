import Colleagues from './';

import { render, screen } from '@testing-library/react';

test('empty items array', async () => {
  const items = [];
  const { getByTestId } = render(<Colleagues items={items} />);
  expect(getByTestId('list').children.length).toBe(0);
});

test('fetch mocked data failure', async () => {
  const items = [{ name: 'name1', office: 'office1' }];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('list').children.length).toBe(1);
});

test('fetch mocked data failure', async () => {
  const items = [
    { name: 'name1', office: 'office1' },
    { name: 'name2', office: 'office2' },
    { name: 'name3', office: 'office3' },
  ];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('list').children.length).toBe(3);
});

test('fetch mocked data failure', async () => {
  const items = [
    { name: 'name1', office: 'office1', twitter: 'twitter' },
  ];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('TwitterIcon')).toBeInTheDocument();
});
