import React, { useEffect } from 'react';

import { useEffect, useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElement = useRef();
  useEffect(() => {
    selectingElement.current.focus();
    alert
  });



  return (
    <div>
      <input type="text" ref={selectingElement} />
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;