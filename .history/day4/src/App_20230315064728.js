import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigationBar></NavigationBar>
        <hr /><hr />
        <Routes>
          <Route path="/" element={}></Route>
          <Route></Route>

          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
