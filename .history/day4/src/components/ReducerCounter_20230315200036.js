import { useReducer } from 'react'
const ReducerCounter = () => {
  const counterReducer = function (state, action) {
    switch (action.type) { 
      case 'increment':
        return { number: state.number + action.points }
       case 'decrement':
        return { number: state.number + 1 }
      
    }
    
    
    }

    const [count, dispatch] = useReducer(counterReducer,{number:0})
  return (
    <div>ReducerCounter
      <h1>use reducer</h1>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      {count.number}
      <button>-</button>
      <br /><br />
      <button>reset</button>
    </div>
  )
}

export default ReducerCounter