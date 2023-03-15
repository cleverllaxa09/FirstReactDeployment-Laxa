import { useState } from "react";

const stateCounter = () => {
  const [count, setCount] = UseState(0);

  const increment = function () {
    setCount(count +1)
  }
  const decrement = function () {
    setCount(count - 1);
  }
  const reset = function () {
    setCount(0)
  }
  return (
    <div>

      <h1>incre ment</h1>
      <button onClick={increment}>+</button>.
      0
      <button onClick={decrement}>-</button>
      <br /><br />
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default stateCounter