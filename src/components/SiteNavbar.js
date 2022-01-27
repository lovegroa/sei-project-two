import React from 'react'
import { Link } from 'react-router-dom'

const SiteNavbar = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/search-results'>Search Results</Link></li>
    <li><Link to='/film'>Individual Film</Link></li>
  </ul>
)

export default SiteNavbar