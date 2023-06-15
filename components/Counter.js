import { useState } from 'react';

export default function Counter({ initial = 0, onChange = () => {} }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button role="decrement" onClick={handleDecrement}>
        -
      </button>
      <span role="counter">Counter: {count}</span>
      <button role="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
