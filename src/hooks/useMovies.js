import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/searchMovies";

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const previousSearch = useRef(query);
  const getMovies = useCallback(async ({ query }) => {
    if (previousSearch.current === query) return null;
    try {
      setLoading(true);
      setErrorMessage(null);
      previousSearch.current = query;
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  },[])
  const sortedMovies = useMemo(() => {
    //console.log("verificar useMemo"); para que funcione debemos eliminar el debounce en el handleChange
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies
  return { movies: sortedMovies, getMovies, loading, errorMessage };
}
