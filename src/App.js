import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Media from "./pages/Media";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserAnimeList from "./pages/AnimeUserList";
import Browse from "./pages/Browse";
import Genres from "./pages/Genres";
import Genre from "./pages/Genre";
import Seasonal from "./pages/Seasonal";

function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/animelist/:user" element={<UserAnimeList />} />
          <Route path="/:type/:id" element={<Media />} />
          <Route path="/anime/genres" element={<Genres />} />
          <Route path="/anime/genres/:id/:name" element={<Genre />} />
          <Route path="/manga/genres" element={<Genres />} />
          <Route path="/manga/genres/:id/:name" element={<Genre />} />
          <Route path="/browse/:filter/:type" element={<Browse />} />
          <Route path="/anime/season" element={<Seasonal />} />
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
`;
