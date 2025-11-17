import React from 'react';

interface Props {
  title: string;
  count: number;
}

const TestComponent: React.FC<Props> = ({ title, count }) => {
  const [localCount, setLocalCount] = React.useState<number>(count);

  const increment = (): void => {
    setLocalCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {localCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default TestComponent;
