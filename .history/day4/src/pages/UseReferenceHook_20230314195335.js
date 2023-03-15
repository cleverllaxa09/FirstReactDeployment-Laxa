import React from 'react';

import { useEffect, useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElements = useRef();
  useEffect(() => {
   // selectingElement.current.focus();
    alert("rederer someting")
  });
  const getValue = function () {
    alert(selectingElements.current.value)
  }



  return (
    <div>
      <input type="text" ref={selectingElement} />
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;