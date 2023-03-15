import React, { useEffect, useRef } from 'react';
import renderCounter from '../component/renderCounter';
const UseReferencePage = () => {
   
  const selectingElements = useRef();
  useEffect(() => {
    alert("rederer someting");
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
      <input type="text" ref={selectingElements} className="sample class" />
      <button onClick={getValue}>get valuevaluse</button>
      <button onClick={changeValue}>change </button>
      <button onClick={getClass}>fget class</button>
      <h1>use refereacpage</h1>
      <hr /><hr />
      <RenderCounter></RenderCounter>
      
    </div>
  )
}
export default UseReferencePage;