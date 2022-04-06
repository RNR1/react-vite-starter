import { describe, expect, it } from 'vitest';
import App from 'app';
import { render, screen, userEvent } from 'utils/test-utils';

describe('Home tests', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />);
    userEvent.click(screen.getByTestId('increment-button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });

  it('should decrement count on click', async () => {
    render(<App />);
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(await screen.findByText(/count is: 0/i)).toBeInTheDocument();
  });

  it('should display Top 3 posts', async () => {
    render(<App />);
    expect(await screen.findByText(/Top 3 Posts/i)).toBeInTheDocument();
    expect(await screen.findByTestId('list-item-1')).toBeInTheDocument();
    expect(await screen.findByTestId('list-item-2')).toBeInTheDocument();
    expect(await screen.findByTestId('list-item-3')).toBeInTheDocument();
    expect(screen.queryByTestId('list-item-4')).not.toBeInTheDocument();
  });
});
