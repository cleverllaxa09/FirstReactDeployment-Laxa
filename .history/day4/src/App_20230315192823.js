import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartMultiple from "./components/CartMultiple";
import Footer from './components/Footer';
import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import UseReducer from "./pages/Usereducer";
import UseReferencePage from "./pages/UseReferenceHook";
import Work from "./pages/Work";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigationBar></NavigationBar>
        <hr /><hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/Work" element={<Work />}></Route>
          
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<CartMultiple />}></Route>
          
          <Route path="/HookUse" element={<UseReferencePage />}></Route>
          <Route path="/ReducerUse" element={<UseReducer/>}></Route>
        </Routes>
      </div>
      <hr /><hr />
    <Footer></Footer>
    
    </BrowserRouter>
   

    
  );
}

export default App;
