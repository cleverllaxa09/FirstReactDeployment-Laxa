import React, { useEffect } from 'react';

import { useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElement = useRef();
  useEffect((=> {
    selectingElement.current.focus();
  }))



  return (
    <div>
      <input type="text" ref={selectingElement} />
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;