import { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter Application</h1>

      <h2>{count}</h2>

      <div className="button-group">
        <button onClick={increment}>Increment (+1)</button>

        <button onClick={decrement}>Decrement (-1)</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;