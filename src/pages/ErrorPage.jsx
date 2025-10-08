import React from 'react'
import { Link } from 'react-router-dom'
import err from '../assets/error-404.png'

export default function ErrorPage(){
  return (
    <div className="error-page-container">
      <div className="error-content">
        <img src={err} alt="404 - Page Not Found" className="error-image" />
        <h2>Page Not Found</h2>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </div>
  )
}