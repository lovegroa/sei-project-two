import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const SearchResults = ({ Spinner }) => {

  const [films, setFilms] = useState([])
  const [isError, setIsError] = useState('')

  const { searchTerm } = useParams()
  console.log(searchTerm)

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=66b63fd8`)
        data.Response === 'True' ?
          setFilms(data.Search)
          :
          setIsError(data.Error)
      } catch (err) {
        setIsError(err.message)
      }
    }
    getSearchData()
  }, [searchTerm])


  return (
    <main>
      <h1>Search Results</h1>
      <div className='results-container'>
        {films.length ? 
          films.map(film => {
            const { imdbID, Title, Type, Year, Poster } = film
            return (
              <Link key={imdbID} to={'/film/' + imdbID}>
                <div className='search-card'>
                  <h3>{Title}</h3>
                  <img src={Poster} alt={Title} />
                  <p>Year Released: {Year}</p>
                  <p>{Type}</p>
                </div>
              </Link>
            )
          }
          )
          :
          isError ?
            <h3>{isError} Please try again.</h3>
            :
            <Spinner />
        }
      </div>
    </main>
  )
}

export default SearchResults