import { MovieCard } from "./index";
const MovieList = ({ movieList, isLoading }) => {
  if (isLoading) {
    return "Loading Movies Please wait";
  } else
    return (
      <div className="m-4 flex flex-wrap bg-movie-list-bg">
        {movieList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    );
};

export default MovieList;
