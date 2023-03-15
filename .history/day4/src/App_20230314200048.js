import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UseReferencePage from './pages/UseReferenceHook';

function App() {
  return (
    <div className="App">
      <UseReferencePage></UseReferencePage>
{/*       
      <BrowserRouter>
      </BrowserRouter>
      <Navigate></Navigate> */}
    </div>
  );
}

export default App;
