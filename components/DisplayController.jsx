import { useState } from "react"

function DisplayController({pokemons, score, highScore,onClick}){


  return(

    <>
      <h1> Pokémon Memory Game </h1>
      <p> Score: {score} | High Score: {highScore} </p>

  <div className="cards">

          {pokemons&& pokemons.map(pokemon=> {
          return (
    <div clicks={pokemon.damageTaken} name={pokemon.name} key={pokemon.name} onClick={onClick} className="card">
      <div className="wrapper">
              <img 
                src={pokemon.coverImg}
                className="cover-image"
              />
            </div>
            <p className='title pokemon-title'>{pokemon.name}</p>
            <img
              src={pokemon.character}
              className="character"/>
    </div>
          )
            })
          }
  </div>
  </>

  )
}

export default DisplayController
