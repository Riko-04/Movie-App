import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    name: '',
    director: '',
    writer: '',
    genre: '',
    imdb_rating: '',
    duration: '',
    image_link: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/movies', movieData);
      navigate('/'); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={movieData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Writer:</label>
          <input
            type="text"
            name="writer"
            value={movieData.writer}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={movieData.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>IMDB Rating:</label>
          <input
            type="number"
            name="imdb_rating"
            value={movieData.imdb_rating}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Duration (mins):</label>
          <input
            type="number"
            name="duration"
            value={movieData.duration}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image_link"
            value={movieData.image_link}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
