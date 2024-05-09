import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from './MovieCard';
import Navbar from './NavBar';
import '../App.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/movies');
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = 
      movie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (movie.director && movie.director.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (movie.writer && movie.writer.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesGenre = !selectedGenre || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <Navbar onGenreSelect={setSelectedGenre} />
      <header className="header">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="main">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
