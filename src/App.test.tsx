import { render, screen } from '@testing-library/react';
import App from './App';

describe('something truthy and falsy', () => {
  test('true to be true', () => {
    expect(true).toBe(true);
  });

  test('false to be false', () => {
    expect(false).toBe(false);
  });

  test('renders a component', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /vite/iu }));
  });
});
