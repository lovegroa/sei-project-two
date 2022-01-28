import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import noPoster from '../images/noposter.jpeg'


const SearchResults = () => {

  const [films, setFilms] = useState([])


  const { searchTerm } = useParams()
  console.log(searchTerm)

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=66b63fd8`)
        console.log(data.Search)
        setFilms(data.Search)
      } catch (err) {
        console.log(err)
      }
    }
    console.log(searchTerm)
    getSearchData()
  }, [searchTerm])


  return (
    <main>
      <h1>Search Results</h1>

      <div className='results-container'>
        {films.map(film => {
          const { imdbID, Title, Type, Year, Poster } = film
          return (
            <Link key={imdbID} to={'/film/' + imdbID}>
              <div className='search-card'>
                <h3>{Title}</h3>
                {Poster === 'N/A' ? <img src={noPoster} alt="poster" /> : <img src={Poster} alt="poster" />}
                <p>Year Released: {Year}</p>
                <p>{Type}</p>
              </div>
            </Link>
          )
        }
        )}
      </div>
    </main>
  )
}

export default SearchResults