import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './component/Home';
import NavigationBar from './component/NavigationBar';
import UseReferencePage from './pages/UseReferenceHook';

function App() {
  return (   <BrowserRouter>
    <div className="App">
      <NavigationBar></NavigationBar>
      <hr /><hr />
      <UseReferencePage></UseReferencePage>
      <Routes>
        <Route path='/' element={}></Route>
      </Routes>
      

    </div>

        </BrowserRouter>
  );
}

export default App;
