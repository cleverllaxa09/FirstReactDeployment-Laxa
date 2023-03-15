import React, { useRef, useState } from 'react';


const RenderCounter = () => {

  const [value, setValue] = useState('')
  const [renderCounter, setRender] = useState('');
  const displayValue = function (e) {
    setValue(e.target.value)
  }
  return (
    <div>renderCounter
      <input type="text" />
      <h1>valueasdsad </h1>
      <h3>render counter :0</h3>

    </div>
  )
}

export default RenderCounter