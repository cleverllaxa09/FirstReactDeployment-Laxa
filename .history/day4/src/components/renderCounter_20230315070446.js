import React, { useEffect, useRef, useState } from 'react';


const RenderCounter = () => {

  const [value, setValue] = useState('')
  const renderCounter=useRef(0)
  const displayValue = function (e) {
    setValue(e.target.value);
  }
  useEffect(
    () => {
      setRender(renderCounter+1)
    }
  )
  return (
    <div>renderCounter
      <input type="text" onChange={displayValue} />
      <h1>{ value}</h1>
      <h3>render counter :{ renderCounter}</h3>

    </div>
  )
}

export default RenderCounter