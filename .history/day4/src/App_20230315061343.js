import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import NavigationBar from './component/NavigationBar';
import Contact from './Pages/Contact';
import Homes from './Pages/Home';
import UseReferencePage from './pages/UseReferenceHook';
import Work from './Pages/Work';

import CartMultiple from './component/CartMultiple';
import CartSingle from './Pages/CartSingle';

function App() {
  return (   <BrowserRouter>
    <div className="App">
      <NavigationBar></NavigationBar>
      <hr /><hr />
      <UseReferencePage></UseReferencePage>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Work' element={<Work></Work>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Cart' element={<CartMultiple></CartMultiple>}></Route>
        <Route path='/HookUse' element={<UseReferencePage></UseReferencePage>}></Route>
      </Routes>
      

    </div>

        </BrowserRouter>
  );
}

export default App;
