import React from 'react'
import '../CSS/pokemonCards.css'

const StatPokemon = ({infoStat}) => {
  
  return (
    <li className='stat__items'>
      <div className='stat__name'>
        <h4>{infoStat.stat.name}</h4>
      </div>
      
      <div className='stat__info'>
        <p>{infoStat.base_stat}</p>
      </div>
    </li>
  )
}

export default StatPokemon