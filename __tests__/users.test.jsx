import { render, screen, waitFor } from '@testing-library/react';
import Users from '~/pages/users';

describe('Users', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ]),
    });
  });

  afterEach(() => {
    global.fetch.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders the list of users', async () => {
    render(<Users />);

    expect(screen.getByText('List of Users')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });

    expect(screen.queryByText('No users found')).toBeNull();
  });

  it('renders an error message when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network Error'));

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    });

    expect(screen.queryByText('No users found')).toBeNull();
  });
});
