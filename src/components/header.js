import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: '#c9f364',
      marginBottom: '0',
      background: 'linear-gradient(to right,  rgb(107, 117, 86), #c9f364)',
      height: '160px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            // family: "'Quicksand', sans-serif",
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <h3>Personal blog focused on dog owners in the St. Petersburg, FL area</h3>
      </h1>
    </div>
  </div>
)

export default Header
