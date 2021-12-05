import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};
