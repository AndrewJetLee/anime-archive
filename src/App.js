import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import styled from "styled-components";
import Search from './pages/Search';

function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/find" element={<Search/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`