import {
  render,
  fireEvent,
  within,
  screen,
} from '@testing-library/react';
import DropDown from './DropDown';

test('render and sort list', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <DropDown
      values={['aaa', 'bbb', 'ccc']}
      onChange={onChange}
      header="DropDownHeader"
    />,
  );

  const selectNode = getByTestId('select');

  expect(screen.getByText('DropDownHeader')).toBeInTheDocument();

  fireEvent.change(selectNode, {
    target: { value: 'bbb' },
  });

  expect(onChange).toBeCalledWith('bbb');
});
