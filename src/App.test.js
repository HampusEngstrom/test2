import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('fetch mocked data failure', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockRejectedValue('API is down'),
  });
  const { getByTestId } = render(<App />);
  const errorNode = await waitFor(() => getByTestId('error'));
  expect(errorNode).toBeInTheDocument();
  jest.restoreAllMocks();
});

test('fetch mocked data failure', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });
  const { getByTestId } = render(<App />);
  const successNode = await waitFor(() => getByTestId('success'));
  expect(successNode).toBeInTheDocument();
  jest.restoreAllMocks();
});
