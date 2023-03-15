import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './component/Footer';
import NavigationBar from './component/NavigationBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import UseReferencePage from './pages/UseReferenceHook';
import Work from './pages/Work';

import CartMultiple from './component/CartMultiple';
import CartSingle from './pages/CartSingle';

function App() {
  return (
    //  <BrowserRouter>
    // <div className="App">
    //   <NavigationBar></NavigationBar>
    //   <hr /><hr />
    //   <UseReferencePage></UseReferencePage>
    //   <Routes>
    //     <Route path='/' element={<Home/>}></Route>
    //     <Route path='/Work' element={<Work></Work>}></Route>
    //     <Route path='/Contact' element={<Contact></Contact>}></Route>
    //     <Route path='/Cart' element={<CartMultiple></CartMultiple>}></Route>
    //     <Route path='/HookUse' element={<UseReferencePage></UseReferencePage>}></Route>
    //   </Routes>
    

    //   </div>
        
    //   <Footer></Footer>
    // </BrowserRouter>


     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
