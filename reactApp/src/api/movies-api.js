export const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b077d449f6bc9de14639188c5e777fc4&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };