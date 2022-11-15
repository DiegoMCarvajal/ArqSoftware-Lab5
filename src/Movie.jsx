const Movie = (props) => {
  return (
    <div>
      <img src={"http://image.tmdb.org/t/p/w500" + props.url}></img>
    </div>
  );
};

export default Movie;
