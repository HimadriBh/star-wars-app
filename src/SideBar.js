import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/films">Films</Link></li>
      </ul>
    </div>
  )
}

export default SideBar
