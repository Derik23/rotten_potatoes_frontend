import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage.js";
import MovieDetail from "./components/pages/MovieDetail.js";
import { Favorites } from "./components/pages/Favorites.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Container from "./components/layout/Container.js";
import { About } from "./components/pages/About.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/MovieDetail/:id" element={<MovieDetail />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
