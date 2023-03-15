import React, { useReducer } from 'react'
const ReducerCounter = () => {
  const counterReducer = function (state, action) {
      return {number:state.number+1}
    }

    const [count, dispatch] = useReducer(counterReducer,{number:0})
  return (
    <div>ReducerCounter
      <h1>use reducer</h1>
      <button onClick={dispatch}>+</button>
      [count.number]
      <button>-</button>
      <br /><br />
      <button>reset</button>
    </div>
  )
}

export default ReducerCounter