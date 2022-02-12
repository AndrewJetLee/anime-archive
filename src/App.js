import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router path="/">
        <Home />
      </Router>
    </div>
  );
}

export default App;
