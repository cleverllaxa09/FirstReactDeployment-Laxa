import React, { useEffect, useRef, useState } from 'react';


const RenderCounter = () => {

  const
  const [value, setValue] = useState('')
  const renderCounter=useRef(0)
  const displayValue = function (e) {
    setValue(e.target.value);
  }
  useEffect(
    () => {
      renderCounter.current++;
    }
  )
  return (
    <div>renderCounter
      <input type="text" onChange={displayValue} />
      <h1>{ value}</h1>
      <h3>render counter :{ renderCounter.current}</h3>

    </div>
  )
}

export default RenderCounter