import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
            <Route path='/' element={<Home Spinner={Spinner} />} />
            <Route path='search-results/:searchTerm' element={<SearchResults Spinner={Spinner} />} />
            <Route path='/film/:imdbID' element={<IndividualFilm Spinner={Spinner} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
