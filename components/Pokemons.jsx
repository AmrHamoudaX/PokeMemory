import axios from "axios";
import { useState, useEffect } from "react";
import GameController from "./GameController";

function Pokemons(){
  const [allPokemonsUrl, setAllPokemonsUrl] = useState(null)
  const [pokemons, setPokemons] = useState(null)
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=12"

//Get all pokemons' urls
  useEffect(()=> {
    axios
    .get(baseUrl)
    .then(response => {
        setAllPokemonsUrl(response.data.results)
      })
  },[])

//Get Pokemons' Data
  useEffect(()=> {
    if(allPokemonsUrl){
    const pokemon1 = axios.get(allPokemonsUrl[0].url)
    const pokemon2 = axios.get(allPokemonsUrl[1].url)
    const pokemon3 = axios.get(allPokemonsUrl[2].url)
    const pokemon4 = axios.get(allPokemonsUrl[3].url)
    const pokemon5 = axios.get(allPokemonsUrl[4].url)
    const pokemon6 = axios.get(allPokemonsUrl[5].url)
    const pokemon7 = axios.get(allPokemonsUrl[6].url)
    const pokemon8 = axios.get(allPokemonsUrl[7].url)
    const pokemon9 = axios.get(allPokemonsUrl[8].url)
    const pokemon10 = axios.get(allPokemonsUrl[9].url)
    const pokemon11 = axios.get(allPokemonsUrl[10].url)
    const pokemon12 = axios.get(allPokemonsUrl[11].url)

      Promise.all([pokemon1, pokemon2,pokemon3,pokemon4,pokemon5, pokemon6, pokemon7, pokemon8, pokemon9, pokemon10, pokemon11, pokemon12 ])
          .then(response=> {
            setPokemons(response.map(pokemon=> {
             return(
            {name:pokemon.data.name, 
            coverImg: pokemon.data.sprites.other.dream_world.front_default, 
            character: pokemon.data.sprites.other['official-artwork'].front_default}
            )}))
          })  
    }
  },[allPokemonsUrl])


  return(
  <GameController pokemonsData={pokemons} />
  )
}


export default Pokemons
