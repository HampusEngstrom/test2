import Colleagues from './';

import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';

test('empty items array', async () => {
  const items = [];
  const { getByTestId } = render(<Colleagues items={items} />);
  expect(getByTestId('list').children.length).toBe(0);
});

test('correct nbr of items: 3', async () => {
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

test('social media', async () => {
  const items = [
    { name: 'name1', office: 'office1', twitter: 'twitter' },
  ];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('TwitterIcon')).toBeInTheDocument();
});

test('pagination test', async () => {
  const items = [
    { name: 'name1', office: 'office1' },
    { name: 'name2', office: 'office1' },
    { name: 'name3', office: 'office1' },
    { name: 'name4', office: 'office1' },
    { name: 'name5', office: 'office1' },
    { name: 'name6', office: 'office1' },
    { name: 'name7', office: 'office1' },
    { name: 'name8', office: 'office1' },
    { name: 'name9', office: 'office1' },
    { name: 'name10', office: 'office1' },
  ];
  const { getByTestId } = render(
    <Colleagues items={items} nbrOfVisibleItems={3} />,
  );

  // expect(getByTestId('list').children.length).toBe(3);
  // expect(getByTestId('pagination-list').children.length).toBe(4);
  let listNode = await waitFor(() => getByTestId('list'));
  let paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );

  expect(listNode.children.length).toBe(3);
  expect(paginationListNode.children.length).toBe(4);
  expect(screen.queryByText('name1')).toBeInTheDocument();
  expect(screen.queryByText('name10')).not.toBeInTheDocument();

  fireEvent.click(screen.queryByText('4'));

  listNode = await waitFor(() => getByTestId('list'));
  paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );
  expect(listNode.children.length).toBe(1);
  expect(paginationListNode.children.length).toBe(4);

  expect(screen.queryByText('name1')).not.toBeInTheDocument();
  expect(screen.queryByText('name10')).toBeInTheDocument();
});
