import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home"
function App() {
  return (
    <div className="App">
      Hello World
      <Route path ="/">
      <Home/>
      </Route> 
      
    </div>
  );
}

export default App;
