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
import { jikanRequest } from "./requestMethods";

function App() {


  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/list" element={<UserList/>}/>
          <Route path="/:type/:id" element={<Media/>}/>
          <Route path="/anime/genres" element={<Genres/>}/>
          <Route path="/browse/:filter/:type" element={<Browse/>}/>
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