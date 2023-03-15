import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigationBar></NavigationBar>
        <hr /><hr />
        <Routes></Routes>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
