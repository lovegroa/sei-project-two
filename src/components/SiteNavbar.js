import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import noPoster from '../images/noposter.jpeg'


const SiteNavbar = () => {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')
  const [quickSearchFilm, setQuickSearchFilm] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    searchValue && navigate(`/search-results/${searchValue}`)
    setSearchValue('')
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
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
        const { data } = await axios.get(`https://www.omdbapi.com/?t=${searchValue}&apikey=66b63fd8`)
        setQuickSearchFilm(data)
        // console.log(data.Response)
      } catch (error) {
        console.log(error.message)
      }

    }
    getPreSearchData()
  }, [searchValue])

  const clearSearch = () => {
    setQuickSearchFilm({})
    setSearchValue('')
  }
  return (
    <ul>
      <div className="nav-container">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li id='search-li'>
          <form onSubmit={handleSubmit}>
            <div id="search-box">
              <input onChange={updateSearchValue} onKeyPress={handleKeyPress} type="text" name='search' placeholder='Search' value={searchValue} />
              {quickSearchFilm.Response === 'True' &&
                <Link to={'/film/' + quickSearchFilm.imdbID} onClick={clearSearch}>
                  <div className='quick-search-container'>
                    {quickSearchFilm.Poster === 'N/A' ? <img src={noPoster} alt="poster" /> : <img src={quickSearchFilm.Poster} alt={quickSearchFilm.Title} />}


                    <div className='quick-search-text'>
                      <h3>{quickSearchFilm.Title}</h3>
                      <p>{quickSearchFilm.Released}</p>
                    </div>
                  </div>
                </Link>}
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