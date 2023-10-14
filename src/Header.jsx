import { useState, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Brand from "./images/brand.png"

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleShowNavbarclose =() =>{
    showNavbar(!showNavbar)
  }

  function Alertdon() {
    alert("contact nous au +243 999 888 777 ")
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Fragment>
      <nav className={colorChange ? ' navbar colorChange' : 'navbar'}>

        <div className="logo" style={{ marginLeft: "35px" }}>
          <NavLink> <img src={Brand} alt='Brand' /></NavLink>
          {/* <Link to="/home" style={{ textDecoration: "none" }}><h4><span style={{color:"#FD841F"}}>Fondation </span>Bulanbo Destin</h4></Link> */}
        </div>
        <div className="menu-icon " onClick={handleShowNavbar} style={{ marginRight: "35px" }}>
          <span> </span>
          <span id="spanleft"></span>
          <span> </span>
        </div>
        <div className={`mt-2 nav-elements ${showNavbar && 'active'}`} style={{ marginRight: "35px" }}>
          <ul className='ullistnavbar'>
            <li>
              <NavLink onClick={handleShowNavbarclose} to="/home">Accueil</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbarclose} to="/about">Apropos</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbarclose} to="/news">Activite</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbarclose} to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbarclose} to="/contact">Contact</NavLink>
            </li>
            <button onClick={Alertdon} className='btn btn-danger donbutton'>Donation</button>
          </ul>
        </div>
      </nav>
    </Fragment>

  )
}

export default Header