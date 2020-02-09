import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f8ef42',
      marginBottom: '0',
      background: 'linear-gradient(to right, #f8ef42 0%, #0fd64f 74%)',
      height: '180px',
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
        <br />
        <h5 className='mt-3'>Blog focused on dog owners in the St. Petersburg, FL area</h5>
      </h1>
    </div>
  </div>
)

export default Header
