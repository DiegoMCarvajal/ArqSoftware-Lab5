const Movie = (props) => {
  return (
    <div className="movie-item">
      <img src={"http://image.tmdb.org/t/p/w300" + props.url} draggable="false"></img>
    </div>
  );
};

export default Movie;
