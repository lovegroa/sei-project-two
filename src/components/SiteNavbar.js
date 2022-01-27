import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SiteNavbar = () => {
  const navigate = useNavigate()
  
  const [ searchValue, setSearchValue ] = useState('')
  const [ quickSearchFilm, setQuickSearchFilm ] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchValue)
    searchValue && navigate(`/search-results/${searchValue}`)
    setSearchValue('')
  }

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    
    const getPreSearchData = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=66b63fd8`)
        console.log(data)
        setQuickSearchFilm(data)
        // console.log(data.Response)
      } catch (error) {
        console.log(error.message)
      }
      
    }
    getPreSearchData()
  }, [searchValue])
  return (
    <ul>
      <div className="nav-container">
        <li>
          <Link to='/'>Film Search</Link>
        </li>
        <li id='search-li'>
          <form onSubmit={handleSubmit}>
            <div id="search-box">
              <input onChange={updateSearchValue} type="text" name='search' placeholder='Search' value={searchValue}/>
              {quickSearchFilm.Response === 'True' && 
                <div className='quick-search-container'>
                  <img src={quickSearchFilm.Poster} alt={quickSearchFilm.Title}/>
                  <div className='quick-search-text'>
                    <h3>{quickSearchFilm.Title}</h3>
                    <p>{quickSearchFilm.Released}</p>
                  </div>
                  
                </div>}
            </div>
            <input type="submit" value='Search' />
          </form>
        </li>
        <li>
          <button onClick={goBack}>Go back</button>
        </li>
      </div>
      
    </ul>
  )
}

  

export default SiteNavbar