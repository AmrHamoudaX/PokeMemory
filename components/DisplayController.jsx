function DisplayController({pokemons, score, highScore,onClick}){

  return(

  <>
    <header className="game-header">
      <h1 className="game-title">Pokémon Memory Battle</h1>
      <div className="scoreboard">
        <div className="score">Score: <span id="score">{score}</span></div>
        <div className="high-score">High Score: <span id="highScore">{highScore}</span></div>
      </div>
    </header>

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
