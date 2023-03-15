import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigationBar></NavigationBar>
        <hr /><hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
