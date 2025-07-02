import { useEffect, useState } from "react"
import DisplayController from "./DisplayController"

function GameController({pokemonsData}){
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [pokemons, setPokemons] = useState(null)

  useEffect(()=> {
    if(pokemonsData){
      setPokemons(pokemonsData.map(p=>{
        return {...p, damageTaken:0}
      }))
    }
  }, [pokemonsData])


  function shuffleArray(){
    setPokemons([...pokemons].sort(()=> Math.random() - .5))
  }


  function handleCardClick(e){
    shuffleArray()
  }


  return(
  <DisplayController pokemons={pokemons} onClick={handleCardClick} score={score} highScore={highScore} />
  )
}

export default GameController
