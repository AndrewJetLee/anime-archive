import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Home from './pages/Home';
import Search from './pages/Search';
import Media from './pages/Media';

function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/media" element={<Media/>}/>
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
    overflow-x: hidden;
`