import React from 'react'
import ReducerCounter from '../components/ReducerCounter'
import RenderCounter from '../components/renderCounter'
import StateCounter from '../components/stateCounter'
const Usereducer = () => {
  return (
    <div>Usereducer
      <hr /><hr />
      <StateCounter></StateCounter>
      <hr /><hr />
      <ReducerCounter></ReducerCounter>
    </div>
  )
}

export default Usereducer