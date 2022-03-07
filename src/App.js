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
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from "./pages/UserList";
import Browse from "./pages/Browse";
import Genres from './pages/Genres';

function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/:filter/:type" element={<Browse/>}/>
          <Route path="/:type/:id" element={<Media/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/list" element={<UserList/>}/>
          <Route path="/anime/genres" element={<Genres/>}/>
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
    position: relative;
`