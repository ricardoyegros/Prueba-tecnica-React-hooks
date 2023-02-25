import { useEffect, useState, useRef } from "react";

export function useSearch () {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);
    useEffect(()=>{
        if(isFirstInput.current){
            isFirstInput.current = query === ""
            return
        }
        if(query === ""){
          setError("No se puede buscar una pelicula vacia")
          return
        }
        if(query.match(/^\d+$/)){
          setError("No se puede buscar una pelicula con numeros")
          return
        }
        if(query.length < 3 ){
          setError("Debes ingresar al menos 3 letras")
          return
        }
        setError(null)
      },[query])
    return{query, setQuery,error}
};