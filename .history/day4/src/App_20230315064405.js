import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import UseReferencePage from './pages/UseReferenceHook';
import Work from './pages/Work';

import CartMultiple from './component/CartMultiple';
import CartSingle from './pages/CartSingle';

function App() {
  return (

    <div className="App">
      <NavigationBar></NavigationBar>

    </div>

    
  );
}

export default App;
