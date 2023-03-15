import React from 'react';

import { useRef } from 'react';
const UseReferencePage = () => {
   
  const selectingElement = useRef();

  return (
    <div>
      <input type="text" ref={selectingElement}/>
      
    </div>
  )
}
export default UseReferencePage;