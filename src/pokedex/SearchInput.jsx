import React from 'react'
import '../CSS/Pokedex.css'

const SearchInput = ({setSearchPokemon, setOptionType}) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSearchPokemon(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value=''
  }

  return (
    <form className='search__input' onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="searchText" 
        placeholder='Search Pokemon'
      />
      <button>Search</button>
    </form>
  )
}

export default SearchInput
