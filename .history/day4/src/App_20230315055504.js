import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UseReferencePage from './pages/UseReferenceHook';

function App() {
  return (   <BrowserRouter>
    <div className="App">
      <UseReferencePage></UseReferencePage>
      
   
  
      <Navigate></Navigate>
    </div>
        </BrowserRouter>
  );
}

export default App;
