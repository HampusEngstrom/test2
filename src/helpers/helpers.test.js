import { sortBy, capitalizeFirstLetter } from './helpers';

test('test sortBy', () => {
  const result = [
    { name: 'bbb' },
    { name: 'ccc' },
    { name: 'aaa' },
  ].sort(sortBy('name'));

  expect(result).toEqual([
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
  ]);
});

test('text capitalizeFirstLetter', () => {
  expect(capitalizeFirstLetter('aaa')).toMatch('Aaa');
  expect(capitalizeFirstLetter('BBB')).toMatch('BBB');
  expect(capitalizeFirstLetter('123')).toMatch('123');
});
