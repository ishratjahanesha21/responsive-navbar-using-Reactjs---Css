import { useState } from "react"
import "../App.css"
import { NavLink } from "react-router-dom"
// import {menuicon} from"../assets/apps-line.png"
const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [showNav, setShowNav] = useState(false)

const toggleNavItems = () => {
  setShowNav(!showNav)
}
  return (
    <>
       <nav className="navbar">
      <div className="container">
        <div className="logo">
         logo
        </div>
        <div className='menu-icon' onClick={toggleNavItems}>btn</div>
        <div className={`nav-elements  ${showNav && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar