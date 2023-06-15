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
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="buttons">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <p role="counter">{count}</p>
    </div>
  );
}
