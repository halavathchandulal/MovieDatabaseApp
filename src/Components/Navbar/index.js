import React from 'react'
import {Link} from 'react-router-dom'
import './index.css' // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Popular
      </Link>
      <Link to="/top-rated" className="navbar-link">
        Top Rated
      </Link>
      <Link to="/upcoming" className="navbar-link">
        Upcoming
      </Link>
      {/* Add search bar */}
    </nav>
  )
}

export default Navbar
