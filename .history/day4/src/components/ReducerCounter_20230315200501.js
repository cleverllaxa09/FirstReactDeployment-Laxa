import { useReducer } from 'react'
const ReducerCounter = () => {
  const counterReducer = function (state, action) {
    switch (action.type) { 
      case 'increment':
        return { number: state.number + action.points }
       case 'decrement':
        return { number: state.number - action.points }
      case 'reset':
        return{number:0}
      default:
        break;
      
    }
    
    
    }

    const [count, dispatch] = useReducer(counterReducer,{number:0})
  return (
    <div>ReducerCounter
      <h1>use reducer</h1>
      <button onClick={() => dispatch({ type: 'increment', points: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'increment', points: 1 })}>+1</button>
      
      {count.number}
      <button onClick={() => dispatch({ type: 'increment', points: -1 })}>+1</button>
          <button onClick={()=>dispatch({type:'increment',points:-5})}>+5</button>
      <br /><br />
          <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default ReducerCounter