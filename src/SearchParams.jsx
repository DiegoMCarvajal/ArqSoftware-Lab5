import { useState, useEffect } from "react";
import Movie from "./Movie";

const SearchParams = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    requestMovies();
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
      Search
      <input
        id="title"
        placeholder="Search movie"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {movies?.map((movie) => (
        <Movie url={movie?.poster_path} />
      ))}
    </div>
  );
};
export default SearchParams;
