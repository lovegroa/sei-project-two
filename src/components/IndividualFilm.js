import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import noPoster from '../images/noposter.jpeg'




const IndividualFilm = () => {

  const { imdbID } = useParams()
  const [filmData, setFilmData] = useState({})
  console.log('param', imdbID)

  useEffect(() => {
    const getFilmData = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=66b63fd8`)
        console.log(data)
        setFilmData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getFilmData()
  }, [imdbID])

  const { Title, Released, Poster, Metascore, imdbRating, Plot, Actors } = filmData

  return (

    <div id="film-page">

      <div id='main'>

        <div id='left'>
          <h1>{Title}</h1>
          <br></br>
          <p>Release date: {Released}</p>
          <div id='ratings'>
            <p>Metascore: <span>{Metascore}</span> </p>
            <p>IMDB: <span>{imdbRating}</span></p>
          </div>
          <h2>Plot:</h2>
          <br></br>
          <p>{Plot}</p>
          <br></br>

          <h2>Starring:</h2>
          <br></br>
          <p>{Actors}</p>
        </div>
        <div id='right'>
          {Poster === 'N/A' ? <img src={noPoster} alt="poster" /> : <img src={Poster} alt="poster" />}
        </div>

      </div>


    </div>
  )
}


export default IndividualFilm