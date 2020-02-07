import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPage from '../pages/blog'

const IndexPage = () => (
  <div className="container">
    <br />
    <h1>Recent Posts</h1>
    <hr />

    <div className='row justify-content-center'>
      <div className="card">
        <h5 className="card-header">Featured Topic</h5>
        <div className="card-body">
          <h5 className="card-title">Special treatment</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, ctium aut tenetur amet?</p>
          <a href="/treats" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  
    <br />
    <hr />

    <div className='row ml-5'>

      <div className='col justify-content-center'>
        <div className="card" style={{ width: '18rem' }}>
          <h3 className="card-header">Dogs are Awesome</h3>
          <img src={require("../images/dog1.jpg")} class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Lorem ipsum, dolor sit amet con sequi rep Esse sit labore inventore provident quo quam sequi.</p>
            <a href="#" class="btn btn-primary">View Post</a>
          </div>
        </div>
      </div>

      <div className='col justify-content-center'>
        <div className="card" style={{ width: '18rem' }}>
          <h3 className="card-header">Dogs are Awesome</h3>
          <img src={require("../images/dog1.jpg")} class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Lorem ipsum, dolor sit amet cosse sit labore inventore provident quo quam sequi.</p>
            <a href="#" class="btn btn-primary">View Post</a>
          </div>
        </div>
      </div>

    </div>

    <br />

    <BlogPage />
    <footer style={{ height: '10rem' }}></footer>

  </div>
)

export default IndexPage
