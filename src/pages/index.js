import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = ({ data }) => (
  <div>
    <br />
    <div className='row'>
      <div className='col'>
        <div className="card shadow-sm">
          <h5 className="card-header">Featured Topic 1</h5>
          <div className="card-body">
            <h5 className="card-title">DIY Birthday Treats</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, ctium aut tenetur amet?</p>
            <a href="/treats" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

      <div className='col'>
        <div className="card">
          <h5 className="card-header">Featured Topic 2</h5>
          <div className="card-body">
            <h5 className="card-title">Best Dog Park in St Pete</h5>

            {/* Add logic to <p> Summary */}
            <p className="card-text">Lorem ipsum dolor sit amet, ctium aut tenetur amet?</p>

            {/* Add logic to link and change tag ti Link */}
            <a href="/treats" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr />

    <h1>Latest Posts</h1>
    <hr />
    <div className='row'>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>

          <div className='col-4'>
            <div className="card shadow-lg" style={{ width: '15rem' }}>
              <h3 className="card-header">{post.node.frontmatter.title}</h3>
              <img src={require("../images/dog1.jpg")} class="card-img-top" alt="..." />
              {/* Posted by {post.node.frontmatter.author} on{' '} */}
              <small className='ml-2 mt-0'>{post.node.frontmatter.date}</small>
              <div className="card-body">

                {/* Add logic to <p> Summary */}
                <p className="card-text">Lorem ipsum dolor sit amet, ctium aut tenetur amet?</p>

                <Link to={post.node.frontmatter.path}>Read More</Link>
              </div>
            </div>
          </div>

          <br />

        </div>

      ))}
    </div>
  </div >
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default IndexPage

