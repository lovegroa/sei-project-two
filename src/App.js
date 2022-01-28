import React, { useState, useEffect } from 'react'
// import { getSearchData } from './helper/Data'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

//components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import IndividualFilm from './components/IndividualFilm'
import Spinner from './components/Spinner'

const App = () => {

  return (
    <>

      <div className='bg'>    </div>
      <div className='bg bg2'>    </div>
      <div className='bg bg3'>    </div>

      <BrowserRouter>
        <SiteNavbar />
        <div id='outside-container'>
          <Routes>
            <Route path='/' element={<Home Spinner={Spinner}/>} />
            <Route path='search-results/:searchTerm' element={<SearchResults Spinner={Spinner}/>} />
            <Route path='/film/:imdbID' element={<IndividualFilm Spinner={Spinner}/>} />
            {/* <Route path='film' element={<IndividualFilm />}/> */}
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
