import Pagination from './Pagination';

import { render, screen } from '@testing-library/react';

test('empty items array', async () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  render(
    <Pagination
      nbrOfVisibleItems={4}
      items={items}
      render={() => <div />}
    />,
  );
  expect(screen.queryByText('1')).toBeInTheDocument();
  expect(screen.queryByText('2')).toBeInTheDocument();
  expect(screen.queryByText('3')).toBeInTheDocument();
  expect(screen.queryByText('4')).not.toBeInTheDocument();
});

test('empty items array', async () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  render(
    <Pagination
      nbrOfVisibleItems={5}
      items={items}
      render={() => <div />}
    />,
  );
  expect(screen.queryByText('1')).toBeInTheDocument();
  expect(screen.queryByText('2')).toBeInTheDocument();
  expect(screen.queryByText('3')).not.toBeInTheDocument();
});

test('empty items array', async () => {
  const items = [1, 2];
  render(
    <Pagination
      nbrOfVisibleItems={5}
      items={items}
      render={() => <div />}
    />,
  );
  expect(screen.queryByText('1')).toBeInTheDocument();
  expect(screen.queryByText('2')).not.toBeInTheDocument();
});

test('empty items array', async () => {
  const items = [];
  render(
    <Pagination
      nbrOfVisibleItems={5}
      items={items}
      render={() => <div />}
    />,
  );
  expect(screen.queryByText('1')).not.toBeInTheDocument();
  expect(screen.queryByText('2')).not.toBeInTheDocument();
});
