import React from 'react';

import { useEffect, useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElement = useRef();
  useEffect(() => {
   // selectingElement.current.focus();
    alert("rederer someting")
  });
  const getValue = function () {
    alert(selectingElement.current.value)
  }



  return (
    <div>
      <input type="text" ref={selectingElement} />
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;