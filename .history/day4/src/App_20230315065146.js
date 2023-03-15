import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartMultiple from "./components/CartMultiple";
import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import Home from './pages/Home';
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
          <Route path="/Cart" element={<Ca />}></Route>
          
          <Route path="/HookUse" element={<UseReferencePage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
