import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
function App() {
  const [sort, setSort] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loading, errorMessage } = useMovies({
    query,
    sort,
  });
  const debouncedGetMovies = useCallback(
    debounce((query) => {
       getMovies({ query });
    }, 300),
    []
  );
  function handleSubmit(e) {
    e.preventDefault();
    //Esta es una manera correcta si tenemos muchos inputs de manera nativa en JS sin agregar muchos useRef
    // const fields = Object.fromEntries(new window.FormData(e.target));
    // console.log(fields);
    getMovies({ query });
  }
  function handleChange(e) {
    const newQuery = e.target.value; // esto es para que no se atrase en llegar el estado
    if (newQuery.startsWith(" ")) return; //esto es una PRE validacion para que no escriba vacio
    setQuery(newQuery);
    debouncedGetMovies(newQuery);
  }
  function handleSort() {
    setSort(!sort);
  }
  useEffect(()=>{
    console.log("get movies");
  },[getMovies])
  //Este use Effect lo usamos para medir la efectividad del useCallback
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Star Wars, Matrix ..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
