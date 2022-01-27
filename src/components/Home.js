import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(searchValue)
    searchValue && navigate(`/search-results/${searchValue}`)
    setSearchValue('')
  }

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <h1>Home</h1>
      {/* <form onSubmit={handleSubmit}>
        <input onChange={updateSearchValue} type="text" name='search' placeholder='Search' />
        <input type="submit" value='Search' />
      </form> */}
    </>

  )
}

export default Home