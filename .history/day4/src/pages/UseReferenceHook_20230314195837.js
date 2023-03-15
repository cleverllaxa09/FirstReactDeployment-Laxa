import React from 'react';

import { useEffect, useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElements = useRef();
  useEffect(() => {
   // selectingElement.current.focus();
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
      <button onClick={changeValue}></button>
      <button onClick={getClass}></button>
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;