import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export const MovieCard = ({ movie }) => {
  const { id, name, imdb_rating, genre, duration, image_link } = movie;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/movies/${id}`);
        setDetails(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="card-container">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: { movieDetails: details },
        }}
      >
        <div className="card-img-container">
          <img className="card-img" src={image_link} alt={name} />
        </div>
        <div className="card-details">
          <div className="title">
            <span>{name}</span>
          </div>
          <div className="genre">
            <span>Genre: {genre}</span>
          </div>
          <div className="ratings">
            <span>Rating: {imdb_rating}</span>
            <span>{duration} mins</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
