import React from 'react';

import { useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElement = useRef();

  return (
    <div>
      <input type="text" ref={selectingElement} />
      <h1>use refereacpage</h1>
      
    </div>
  )
}
export default UseReferencePage;