export async function searchMovies({query}){
        if (query === "") return null 
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=a68c2193&s=${query}`)
            const json = await response.json();
            const movies = json.Search
            return movies?.map((movie) => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
              }));
          } catch(e) {
            throw new Error("Error in fetching data");
          }
}