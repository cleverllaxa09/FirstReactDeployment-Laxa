import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavigationBar></NavigationBar>

      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
