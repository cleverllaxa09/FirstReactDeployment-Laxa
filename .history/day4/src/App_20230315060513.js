import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import NavigationBar from './component/NavigationBar';
import Home from './Pages/Contact';
import Home from './Pages/Home';
import UseReferencePage from './pages/UseReferenceHook';
import Work from './Pages/Work';

function App() {
  return (   <BrowserRouter>
    <div className="App">
      <NavigationBar></NavigationBar>
      <hr /><hr />
      <UseReferencePage></UseReferencePage>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      

    </div>

        </BrowserRouter>
  );
}

export default App;
