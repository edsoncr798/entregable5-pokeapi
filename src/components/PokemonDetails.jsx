import axios from 'axios'
import React from 'react'
import '../CSS/Pokedex.css'
import '../CSS/PokeDetails.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StatPercentage from './StatPercentage'


const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} =useParams()

  useEffect(()=>{
    const URL=`https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res=>setPokeInfo(res.data))
    .catch(err=>console.log(err))
  },[pokeInfo])

  // console.log(pokeInfo)

  const statData={
    hp:pokeInfo?.stats[0].base_stat,
    attack:pokeInfo?.stats[1].base_stat,
    speed:pokeInfo?.stats[2].base_stat,
    defense:pokeInfo?.stats[5].base_stat,
  }

  const calcPercentageStat = () => {
    const datoStat= statData;
    let result = 0

    if(datoStat>=0&& datoStat<=16){
      result = 10
    }else if(datoStat>=17 && datoStat<=33){
      result = 20
    }else if(datoStat>=34 && datoStat<=48){
      result = 30
    }else if(datoStat>=49 && datoStat<=64){
      result = 40
    }else if(datoStat>=65 && datoStat<76){
      result = 50
    }else if(datoStat>=77 && datoStat<90){
      result = 60
    }else if(datoStat>=90 && datoStat<105){
      result = 70
    }else if(datoStat>=105 && datoStat<120){
      result = 80
    }else if(datoStat>=120 && datoStat<135){
      result = 90
    }else{
      result = 100
    }
    // (datoStat>=135 && datoStat<=150)
    return result
  }

  // console.log(pokeInfo)
  return (
    <article className='pokeInfo__container'>

      <header className='pokedex__header'>
        
        <div className='img__pokedex'>
          <img src={'./img/pokedexLogo.png'} alt="" />
        </div>
        <div className='img__pokeball2' >
          <img src={'./img/pokeball.png'} alt="" />
        </div>

        <div className='header__1'></div>
        <div className='header__2'></div>
      </header>

      <section className='pokeInfo___card'>

        <header className='pokeInfo__img'>
          <img src={pokeInfo?.sprites.other['official-artwork']['front_default']} alt="" />
        </header>

        <h2 className='order__card'>#{pokeInfo?.order}</h2>

        <div className='pokeInfo__name'>
          <div className='line__text'></div>
          <h1>{pokeInfo?.name}</h1>
          <div className='line__text'></div>
        </div>
        <ul className='pokeInfo__personal'>
            <li className='weight__height'><p>Weight</p>{pokeInfo?.weight}</li>
            <li className='weight__height'><p>Height</p>{pokeInfo?.height}</li>
        </ul> 

        <div className='pokeInfo__type-habilities'>
          <div className='pokeInfo__type'>
                <h2>Type</h2>
                <div className='btn__type'>
                  {
                    pokeInfo?.types.map(slot=>(
                      <button key={slot.type.url}> {slot.type.name}</button>
                    ))
                  }
                </div>
          </div>

          <div className='pokeInfo__habilities'>
                <h2>Skill</h2>
                <div className='btn__ability'>
                  {
                    pokeInfo?.abilities.map(hability=>(
                      <button key={hability.ability.url}>{hability.ability.name}</button>
                    ))
                  }
                </div>

          </div>
        </div>    

        <div className='poke__navbar'>
                  <h1>Stats</h1>
                  <div className='poke__divider'></div>
                  <img src={pokeInfo?.sprites.other['official-artwork']['front_default']} alt="" />
        </div>   
        

      <div className='stat__bar'>
          <div className='stat__hp'>
              <div className='stat__text'>
                <h2>HP</h2>
                <h2 key={pokeInfo?.stats[0].stat.url}>{pokeInfo?.stats[0].base_stat}/150</h2>
              </div>

              <div className='bar__box'>
                <div 
                  className={`stat__content bar__percentage${calcPercentageStat()}`}
                >
                  {
                    pokeInfo?.stats[0].base_stat
                  }
                </div>
              </div>
          </div>

          <div className='stat__attack'>
            <div className='stat__text'>
              <h2>Attack</h2>
              <h2 key={pokeInfo?.stats[1].stat.url}>{pokeInfo?.stats[1].base_stat}/150</h2>
            </div>
            <div className='bar__box'>
              <div 
                className={`stat__content stat bar__percentage${calcPercentageStat()}`}
              >
                {
                  pokeInfo?.stats[1].base_stat
                }
              </div>
            </div>
          </div>

          <div className='stat__defense'>
            <div className='stat__text'>
              <h2>Defense</h2>
              <h2 key={pokeInfo?.stats[2].stat.url}>{pokeInfo?.stats[2].base_stat}/150</h2>
            </div>
            <div className='bar__box'>
              <div 
                className={`stat__content stat bar__percentage${calcPercentageStat()}`}
              >
                {
                  pokeInfo?.stats[2].base_stat
                }
              </div>
            </div>
          </div>

          <div className='stat__speed'>
            <div className='stat__text'>
              <h2>Speed</h2>
              <h2 key={pokeInfo?.stats[5].stat.url}>{pokeInfo?.stats[5].base_stat}/150</h2>
            </div>
            <div className='bar__box'>
                  <div 
                    className={`stat__content stat bar__percentage${calcPercentageStat()}`}
                  >
                    {pokeInfo?.stats[5]['base_stat']}
                  </div>
              </div>
          </div>
      </div> 
      {/* <div>
        {
          pokeInfo?.stats.map(stat=>(
            <StatPercentage
              key={stat.stat.url}
              stat={stat}
            />
          ))
        }
      </div> */}
      </section>

      <footer className='pokeInfo__move'>

      <div className='poke__navbar'>
                  <h1>Movements</h1>
                  <div className='poke__divider'></div>
                  <img src={'./img/pokeball2.png'} alt="" />
        </div> 

        <div className='movements'>
                  {
                    pokeInfo?.moves.map(movement=>(
                      <button>{movement.move.name}</button>
                    ))
                  }
        </div>

      </footer>

    </article>
  )
}

export default PokemonDetails