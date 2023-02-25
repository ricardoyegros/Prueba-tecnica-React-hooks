<h1 align="center">🚀 Prueba Técnica React Hooks de Midudev 🚀</h1>

<h2 align="center">📃 Información General 📃</h2>

<p>Este es el Challenge de Midudev de React para aprender y poner en práctica los hooks de React 🚀</p>
<p>Este repositorio contiene un buscador de películas el cual tiene como requisitos para su construcción los siguientes enunciados...</p>

<h2>Creación de una App para buscar películas utilizando la API de OMDBAPI 💻 </h2>
<h2>Requerimientos:</h2>
<ul>
  <li>Necesita mostrar un input para buscar la película y un botón para realizar la búsqueda.</li>
  <li>Lista las películas encontradas y muestra el título, año y poster.</li>
  <li>Haz que las películas se muestren en un grid responsive.</li>
  <li>Evitar que se haga la misma búsqueda dos veces seguidas.</li>
  <li>Haz que la búsqueda se haga automáticamente al escribir.</li>
  <li>Evita que se haga la búsqueda continuamente al escribir (utiliza un debounce).</li>
</ul>

<h2> Instalación: 🔧</h2>
<ul>
  <li> git clone https://github.com/ricardoyegros/Prueba-tecnica-React-hooks.git </li>
  <li> cd /pararse/en/la/carpeta/Prueba-tecnica-React-hooks </li>
  <li> npm install </li>
  <li> npm run dev </li>
</ul>

<h2> Hooks utilizados: 💪</h2>
<ul>
  <li>useState -> Para la creación de estados.</li>
  <li>useEffect -> Para los manejar los ciclos de vida del componente.</li>
  <li>useRef -> Para crear referencias y evitar que se haga la misma búsqueda dos veces.</li>
  <li>useMemo -> Para mejorar el rendimiento y evitar que se cree el mismo resultado en cada render.</li>
  <li>useCallback -> Para mejorar el rendimiento y evitar que se cree la misma función al escribir cada letra.</li>
  <li>useMovies -> Un Custom Hook creado para este proyecto.</li>
  <li>useSearch -> Un Custom Hook creado para este proyecto.</li>
</ul>
