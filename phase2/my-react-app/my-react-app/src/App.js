// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';
import Navbar from './components/NavBar';

const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/movie/:id'];
  const shouldShowNavbar = !hideNavbarOnRoutes.some((route) =>
    location.pathname.match(new RegExp(route))
  );

  return shouldShowNavbar ? <Navbar /> : null;
};

const App = () => {
  return (
    <Router>
      <ConditionalNavbar /> {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
};

export default App;
