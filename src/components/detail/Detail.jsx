import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../movies/Movie";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const {id: movieId} = useParams()

  useEffect(() => {
    movieId && requestMovies();
  }, [movieId]);

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c10202e155aeccc970f1370e52275d7`
    );

    const movie = await res.json();
    setMovie(movie);
  }
  
  return (
    <div >
      {!!movie && <>
        Title: {movie?.title}
        <Movie url={movie.poster_path} />
      </>}
    </div>
  );
};
export default Detail;
