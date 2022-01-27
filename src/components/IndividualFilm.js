import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



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

  const { Title, Year, Rated } = filmData

  return (

    

    <>
      <h1>{Title}</h1>
    </>



  )
}


export default IndividualFilm