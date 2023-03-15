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



  return (
    <div>
      <input type="text" ref={selectingElements} />
      <button onClick={getValue}></button>
      <button onClick={ }></button>
      <button onClick={ }></button>
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;