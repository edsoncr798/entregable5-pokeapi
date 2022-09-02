import '../CSS/Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setNameTrainer} from '../store/slices/nameTrainer.slice'
const Home = () => {
// usamos Dispatch() para ejecutar un action.payload
 const dispatch=useDispatch()

 // hacemos el redireccionamiento con el useNavigate()
 const navigate =useNavigate()



  const handleSubmit=(e)=>{
    e.preventDefault()

    const inputValue=e.target.name.value.trim()

    //  usamos redux para guardar la info del input en un state global
    // usamos el condicional if() para validar datos vacios en el input
    if(inputValue.length!==0){
      // ejecutamos la action y le pasamos la info del inputValue
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value=''
  }

  return (
    <article className='home'>
      <img src={'./img/pokedexLogo.png'} alt="img-pokedex" />
      <span className='home__title font__text'>¡Hi trainer!</span>
      <p className='home__subTitle font__text'>To start, give me your name</p>
      
        <form onSubmit={handleSubmit}>
          <input className='home__input' type="text" placeholder='your name' id="name" />
          <button className='home__btn'>Start</button>
        </form>
        <div className='img__pokeball'>
          <img src={'./img/pokeball.png'} alt="imagen-pokeboll" />
        </div>
      <footer className='home__footer'>
        <div className='footer__1'></div>
        <div className='footer__2'></div>
      </footer>

    </article>
  )
}

export default Home