import React, { useEffect } from 'react'
import '../CSS/Colors.css'
import {useState} from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import {useNavigate} from 'react-router-dom'

const PokemonCard = ({url}) => {

  const navigate=useNavigate()

  const [pokemon, setPokemon]= useState()

  useEffect(()=>{
    axios.get(url)
    .then(res=>setPokemon(res.data))
    .catch(err=>console.log(err))
  },[])

  // console.log(pokemon)
  // no se usa el encadenamiento opcional por que las cards ya se muestran y solo debemos hacer click
  const handleClick=()=>navigate(`/pokedex/${pokemon.name}`)


  return (
    <article onClick={handleClick} className={`pokemon__card border-${pokemon?.types[0].type.name}`}>
      <header className={`header__pokemon bg-${pokemon?.types[0].type.name}`}>
        <img src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
      </header>
      <section className='section__pokemon'>
        <h2>{pokemon?.name}</h2>
        <ul className='pokemon__type'>
          {
            pokemon?.types.map(slot=>(
              <li key={slot.type.url}>{slot.type.name}</li>
            ))
          }
        </ul>
      </section>
      <h5>Type</h5>
      <hr className='hr__pokemon'/>
      <footer className='footer__pokemon'>
          <ul className='pokemon-stat__list'>
            {
              pokemon?.stats.map(stat=>(
                <StatPokemon
                  key={stat.stat.url}
                  infoStat={stat}
                />
              ))
            }
          </ul>
      </footer>

    </article>
  )
}


export default PokemonCard