import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noPoster from '../images/noposter.jpeg'


const Home = ({ Spinner }) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [filmData, setFilmData] = useState({})
  const [isError, setIsError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(searchValue)
    searchValue && navigate(`/search-results/${searchValue}`)
    setSearchValue('')
  }

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {

    const getRandomWord = async () => {
      try {
        const { data } = await axios.get('https://random-word-api.herokuapp.com/word?number=1')
        console.log(data)
        setSearchValue(data)
        // console.log(data.Response)
      } catch (error) {
        setIsError(error.message)
      }

    }
    getRandomWord()
  }, [])

  useEffect(() => {

    const getRandomFilm = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=66b63fd8`)
        console.log('test', data)

        data.Error ? setSearchValue('Cage') : setFilmData(data)

        // console.log(data.Response)
      } catch (error) {
        console.log('test', error.message)
        // error.message === 'Movie not found!'

      }

    }
    getRandomFilm()
  }, [searchValue])

  const { Title, Released, Poster, Metascore, imdbRating, imdbID } = filmData


  return (
    <>
      <div className='title'>
        <h1>Home</h1>
        <h2>Here is a random film just for you:</h2>
      </div>
      <br></br>
      {filmData.Title ?
        <Link to={`/film/${imdbID}`}>
          <div id="film-page">
            <div id='main'>
              <div id='left'>
                <h1>{Title}</h1>
                <p>{Released}</p>
                <div id='ratings'>
                  <p>Metascore: <span>{Metascore}</span></p>
                  <p>IMDB: <span>{imdbRating}</span></p>
                </div>
              </div>
              <div id='right'>
                {Poster === 'N/A' ? <img className='poster' src={noPoster} alt="poster" /> : <img className='poster' src={Poster} alt="poster" />}
              </div>
            </div>
          </div>
        </Link>
        : 
        isError ?
          <h3>{isError}. Try Searching films instead</h3>
          : <Spinner />
          // null
      }
      

      {/* <form onSubmit={handleSubmit}>
        <input onChange={updateSearchValue} type="text" name='search' placeholder='Search' />
        <input type="submit" value='Search' />
      </form> */}
    </>

  )
}

export default Home