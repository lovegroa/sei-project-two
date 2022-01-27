import React, { useState, useEffect } from 'react'
// import { getSearchData } from './helper/Data'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

//components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import IndividualFilm from './components/IndividualFilm'

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
            <Route path='/' element={<Home />} />
            <Route path='search-results/:searchTerm' element={<SearchResults />} />
            <Route path='/film/:imdbID' element={<IndividualFilm />} />
            {/* <Route path='film' element={<IndividualFilm />}/> */}
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
