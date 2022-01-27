import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SiteNavbar = () => {
  const navigate = useNavigate()
  
  const [ searchValue, setSearchValue ] = useState('')

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
    <ul>
      <div className="nav-container">
        <li>
          <Link to='/'>Film Search</Link>
        </li>
        <li>
          <form onSubmit={handleSubmit}>
            <input onChange={updateSearchValue} type="text" name='search' placeholder='Search' />
            <input type="submit" value='Search' />
          </form>
        </li>
      </div>
      
    </ul>
  )
}

  

export default SiteNavbar