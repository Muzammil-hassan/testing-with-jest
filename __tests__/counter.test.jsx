import { fireEvent, render } from '@testing-library/react';
import Counter from '~/components/Counter';

describe('Counter Component', () => {
  it('should render and display Counter', () => {
    const { getByRole } = render(<Counter />);
    const counterElement = getByRole('counter');
    expect(counterElement).toHaveTextContent('0');
  });

  it('supports an "initial" prop to set the value', () => {
    const { getByRole } = render(<Counter initial={100} />);
    const counterElement = getByRole('counter');
    expect(counterElement).toHaveTextContent('100');
  });

  it('when the increment button is pressed, the counter is incremented', () => {
    const { getByRole, getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const counterElement = getByRole('counter');

    fireEvent.click(incrementButton);

    expect(counterElement).toHaveTextContent('1');
  });

  it('when the decrement button is pressed, the counter is decremented', () => {
    const { getByRole, getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');
    const counterElement = getByRole('counter');

    fireEvent.click(decrementButton);

    expect(counterElement).toHaveTextContent('-1');
  });

  it('should match the snapshot', () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });
});
