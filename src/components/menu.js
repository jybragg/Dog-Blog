import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = () => (
  <div class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav flex-column mb-5"
        style={{
          textAlign: 'center',
          position: 'fixed',
          top: '160',
          left: '0',
          display: 'flex',
          direction: 'column',
          width: '9rem',
          height: '80vh',
        }}
      >
       
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <hr />
        <li className="nav-item">
          <Link className="nav-link" to="/dogparks">Dog Parks</Link>
        </li>
        <hr />
        {/* <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li> */}
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
    </div>
  </div>
)

export default Menu
