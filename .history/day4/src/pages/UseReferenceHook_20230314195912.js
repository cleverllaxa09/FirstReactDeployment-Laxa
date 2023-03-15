import React from 'react';

import { useEffect, useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElements = useRef();
  useEffect(() => {
    alert("rederer someting")
  });
  const getValue = function () {
    alert(selectingElements.current.value);
  }

  const changeValue = function () {
    selectingElements.current.value = "new value"
  }
  const getClass = function () {
    alert(selectingElements.current.classList)
  }



  return (
    <div>
      <input type="text" ref={selectingElements} />
      <button onClick={getValue}>get valuevaluse</button>
      <button onClick={changeValue}>change </button>
      <button onClick={getClass}>fget class</button>
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;