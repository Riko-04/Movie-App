import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const MovieDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const location = useLocation(); 
  const preloadedData = location.state?.movieDetails; 

  const [movie, setMovie] = useState(preloadedData);

  useEffect(() => {
    if (!movie) {
      const fetchMovie = async () => {
        try {
          const { data } = await axios.get(`http://localhost:3001/movies/${id}`);
          setMovie(data); 
        } catch (err) {
          console.error('Failed to fetch movie:', err); 
        }
      };

      fetchMovie(); 
    }
  }, [id, movie]);

  if (!movie) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="movie-details">
      <h1>{movie.name}</h1>
      <img src={movie.image_link} alt={movie.name} className="movie-image" />
      <p>Director: {movie.director}</p>
      <p>Writer: {movie.writer}</p>
      <p>Genre: {movie.genre}</p>
      <p>IMDB Rating: {movie.imdb_rating}</p>
      <p>Duration: {movie.duration} mins</p>
      <button className="button-back" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
