import { useState } from "react";

const stateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = function () {
    setCount(count +1)
  }
  const decrement = function () {
    setCount(count - 1);
  }
  return (
    <div>

      <h1>incre ment</h1>
      <button>+</button>.
      0
      <button>-</button>

    </div>
  )
}

export default stateCounter