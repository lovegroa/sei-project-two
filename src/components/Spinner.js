import React from 'react'
import spinnerImg from '../images/spinner.gif'

const Spinner = () => (
  <div className="spinner-wrapper">
    <img src={spinnerImg} alt='loading' id='spinner'/>
  </div>
)

export default Spinner