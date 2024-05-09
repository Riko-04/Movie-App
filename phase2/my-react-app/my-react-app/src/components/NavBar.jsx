// NavBar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/movies');
        const uniqueGenres = [...new Set(data.map((movie) => movie.genre))];
        setGenres(uniqueGenres);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGenres();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/add-movie">Add Movie</Link>
      <select onChange={(e) => onGenreSelect(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
