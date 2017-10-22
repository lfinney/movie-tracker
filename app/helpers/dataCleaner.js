const dataCleaner = (movieData) => {
  return {
    movie_id: movieData.id,
    title: movieData.title,
    poster_path: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
    release_date: movieData.release_date,
    vote_average: movieData.vote_average,
    overview: movieData.overview
  };
};

export default dataCleaner;
