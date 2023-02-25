export function ListMovies({movies}) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMovies () {
    return (
        <p>No se encontraron peliculas para esta busqueda</p>
    )
};

export function Movies({movies}){
    const hasMovies = movies?.length > 0;
    return(
        hasMovies ? <ListMovies movies={movies} /> : <NoMovies/>
    )
};