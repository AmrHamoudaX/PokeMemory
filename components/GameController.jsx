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

  //Calculate Score based on total damage taken 
  useEffect(()=> {
    if(pokemons){
    const newScore = pokemons.reduce(
    (accumulator, currentValue)=> accumulator + currentValue.damageTaken,0)
      setScore(newScore)
      setHighScore(newScore > highScore
      ? newScore
      : highScore
      )
    }
  },[pokemons])

  //Allow User to hit each card once only then shuffle
  function handleCardClick(e){

    if(e.currentTarget.getAttribute('clicks')== 0){
      setPokemons(pokemons.map(p=>{
        if(p.name == e.currentTarget.getAttribute('name')){
          return {...p, damageTaken: 1}
        }else{
          return {...p}
        }}).sort(()=> Math.random() - .5))
    }else{
      setPokemons(pokemons.map(p=> {
        return {...p, damageTaken:0}
      }
      ).sort(()=> Math.random() - .5))
    }
    
  }

  return(
  <DisplayController pokemons={pokemons} onClick={handleCardClick} score={score} highScore={highScore} />
  )
}

export default GameController
