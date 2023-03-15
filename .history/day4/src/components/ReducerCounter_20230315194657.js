import React, { useReducer } from 'react'
const ReducerCounter = () => {

    const [count, dispatch] = useReducer(counterReducer,{number:0})
  return (
    <div>ReducerCounter
      <h1>use reducer</h1>
      <button>+</button>
      <button>-</button>
      <br /><br />
      <button>reset</button>
    </div>
  )
}

export default ReducerCounter