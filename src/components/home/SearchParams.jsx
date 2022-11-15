import { useState, useEffect } from "react";
import Movie from "../movies/Movie";
import "./home.scss"
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SearchParams = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const detailsPage = movieId => {
    navigate(`/detail/${movieId}`)
  }

  useEffect(() => {
    title && requestMovies();
  }, [title]);

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3c10202e155aeccc970f1370e52275d7&query=${title}`
    );

    const json = await res.json();
    setMovies(json.results);
  }
  return (
    <div className="search-params">
      <div className="query-wrapper">
        <input
          id="query"
          placeholder="Search movie"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="movie-wrapper">
        {!!movies.length && movies.map(movie =>
          <div onClick={() => detailsPage(movie.id)}>
            <Movie url={movie.poster_path} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchParams;
