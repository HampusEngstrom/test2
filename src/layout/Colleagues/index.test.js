import Colleagues from './';

import {
  render,
  fireEvent,
  screen,
  within,
  waitFor,
} from '@testing-library/react';

window.scrollTo = () => {};

test('empty items array', async () => {
  const items = [];
  const { getByTestId } = render(<Colleagues items={items} />);
  expect(getByTestId('list').children.length).toBe(0);
});

test('render 1 item', async () => {
  const items = [{ name: 'name1', office: 'office1' }];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('list').children.length).toBe(1);
});

test('render 3 items', async () => {
  const items = [
    { name: 'name1', office: 'office1' },
    { name: 'name2', office: 'office2' },
    { name: 'name3', office: 'office3' },
  ];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('list').children.length).toBe(3);
});

test('render social media', async () => {
  const items = [
    { name: 'name1', office: 'office1', twitter: 'twitter' },
  ];
  const { getByTestId } = render(<Colleagues items={items} />);

  expect(getByTestId('TwitterIcon')).toBeInTheDocument();
});

test('render and click arrows in pagination', async () => {
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
    <Colleagues items={items} nbrOfVisibleItems={2} />,
  );

  let listNode = await waitFor(() => getByTestId('list'));
  let paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );

  expect(listNode.children.length).toBe(2);
  expect(paginationListNode.children.length).toBe(7);
  expect(screen.queryByText('name1')).toBeInTheDocument();
  expect(screen.queryByText('name2')).toBeInTheDocument();
  expect(screen.queryByText('name3')).not.toBeInTheDocument();
  expect(screen.queryByText('name4')).not.toBeInTheDocument();

  const prevBtn = getByTestId('prev-page');
  const nextBtn = getByTestId('next-page');

  fireEvent.click(prevBtn);

  expect(screen.queryByText('name1')).toBeInTheDocument();
  expect(screen.queryByText('name2')).toBeInTheDocument();
  expect(screen.queryByText('name3')).not.toBeInTheDocument();
  expect(screen.queryByText('name4')).not.toBeInTheDocument();

  fireEvent.click(nextBtn);

  expect(screen.queryByText('name1')).not.toBeInTheDocument();
  expect(screen.queryByText('name2')).not.toBeInTheDocument();
  expect(screen.queryByText('name3')).toBeInTheDocument();
  expect(screen.queryByText('name4')).toBeInTheDocument();

  fireEvent.click(screen.queryByText('4'));

  expect(screen.queryByText('name5')).not.toBeInTheDocument();
  expect(screen.queryByText('name6')).not.toBeInTheDocument();
  expect(screen.queryByText('name7')).toBeInTheDocument();
  expect(screen.queryByText('name8')).toBeInTheDocument();
  expect(screen.queryByText('name9')).not.toBeInTheDocument();
  expect(screen.queryByText('name10')).not.toBeInTheDocument();

  fireEvent.click(nextBtn);

  expect(screen.queryByText('name7')).not.toBeInTheDocument();
  expect(screen.queryByText('name8')).not.toBeInTheDocument();
  expect(screen.queryByText('name9')).toBeInTheDocument();
  expect(screen.queryByText('name10')).toBeInTheDocument();

  fireEvent.click(nextBtn);

  expect(screen.queryByText('name7')).not.toBeInTheDocument();
  expect(screen.queryByText('name8')).not.toBeInTheDocument();
  expect(screen.queryByText('name9')).toBeInTheDocument();
  expect(screen.queryByText('name10')).toBeInTheDocument();
});

test('render and click pagination', async () => {
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

  let listNode = await waitFor(() => getByTestId('list'));
  let paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );

  expect(listNode.children.length).toBe(3);
  expect(paginationListNode.children.length).toBe(6);
  expect(screen.queryByText('name1')).toBeInTheDocument();
  expect(screen.queryByText('name10')).not.toBeInTheDocument();

  expect(screen.queryByText('1').classList.contains('active')).toBe(
    true,
  );
  expect(screen.queryByText('4').classList.contains('active')).toBe(
    false,
  );

  fireEvent.click(screen.queryByText('4'));

  listNode = await waitFor(() => getByTestId('list'));
  paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );
  expect(listNode.children.length).toBe(1);
  expect(paginationListNode.children.length).toBe(6);

  expect(screen.queryByText('name1')).not.toBeInTheDocument();
  expect(screen.queryByText('name10')).toBeInTheDocument();
  expect(screen.queryByText('1').classList.contains('active')).toBe(
    false,
  );
  expect(screen.queryByText('4').classList.contains('active')).toBe(
    true,
  );
});

test('render and sort list', async () => {
  const items = [
    { name: 'ddd', office: 'office1' },
    { name: 'fff', office: 'office1' },
    { name: 'aaa', office: 'office1' },
    { name: 'bbb', office: 'office1' },
    { name: 'ccc', office: 'office1' },
    { name: 'ggg', office: 'office1' },
    { name: 'ddd', office: 'office1' },
    { name: 'eee', office: 'office1' },
    { name: 'hhh', office: 'office1' },
    { name: 'iii', office: 'office1' },
  ];
  const { getByTestId } = render(
    <Colleagues items={items} nbrOfVisibleItems={4} />,
  );

  let listNode = await waitFor(() => getByTestId('list'));
  let paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );
  expect(within(listNode.children[0]).getByText('ddd'));
  expect(within(listNode.children[1]).getByText('fff'));
  expect(within(listNode.children[2]).getByText('aaa'));
  expect(listNode.children.length).toBe(4);
  expect(paginationListNode.children.length).toBe(5);

  fireEvent.change(getByTestId('select'), {
    target: { value: 'name' },
  });

  listNode = await waitFor(() => getByTestId('list'));

  expect(within(listNode.children[0]).getByText('aaa'));
  expect(within(listNode.children[1]).getByText('bbb'));
  expect(within(listNode.children[2]).getByText('ccc'));
  expect();
});

test('render and sort list', async () => {
  const items = [
    { name: 'ddd', office: 'officeD' },
    { name: 'fff', office: 'officeA' },
    { name: 'aaa', office: 'officeC' },
    { name: 'bbb', office: 'officeD' },
    { name: 'ccc', office: 'officeA' },
    { name: 'ggg', office: 'officeB' },
    { name: 'ddd', office: 'officeF' },
    { name: 'eee', office: 'officeG' },
    { name: 'hhh', office: 'officeD' },
    { name: 'iii', office: 'officeE' },
  ];
  const { getByTestId } = render(
    <Colleagues items={items} nbrOfVisibleItems={4} />,
  );

  let listNode = await waitFor(() => getByTestId('list'));
  let paginationListNode = await waitFor(() =>
    getByTestId('pagination-list'),
  );
  expect(within(listNode.children[0]).getByText('Office: officeD'));
  expect(within(listNode.children[1]).getByText('Office: officeA'));
  expect(within(listNode.children[2]).getByText('Office: officeC'));
  expect(within(listNode.children[3]).getByText('Office: officeD'));
  expect(listNode.children.length).toBe(4);
  expect(paginationListNode.children.length).toBe(5);

  fireEvent.change(getByTestId('select'), {
    target: { value: 'office' },
  });

  listNode = await waitFor(() => getByTestId('list'));

  expect(within(listNode.children[0]).getByText('Office: officeA'));
  expect(within(listNode.children[1]).getByText('Office: officeA'));
  expect(within(listNode.children[2]).getByText('Office: officeB'));
  expect(within(listNode.children[3]).getByText('Office: officeC'));
  expect();
});
