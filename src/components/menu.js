import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (

  <ul className="nav flex-column mb-5"
    style={{
      // textAlign: 'center',
      position: 'fixed',
      // top: '160',
      // left: '0',
      // display: 'flex',
      // direction: 'column',
      width: '9rem',
      // height: '80vh',
    }}
  >
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <hr />
    <li className="nav-item">
      <Link className="nav-link" to="/about">About Us</Link>
    </li>
    <hr />
    <li className="nav-item">
      <Link className="nav-link" to="/dogparks">Dog Parks</Link>
    </li>
    <hr />
    <li className="nav-item">
      <Link className="nav-link" to="/diy">DIY</Link>
    </li>
    <hr />
    <li className="nav-item">
      <Link className="nav-link" to="/treats">Treats</Link>
    </li>
    <hr />
    <li className="nav-item">
      <Link className="nav-link" to="/dogwalking">Dog Walking</Link>
    </li>
  </ul>

)

export default Menu
