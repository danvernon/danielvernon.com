import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello World</h1>
    <Link to="/posts/">Go to posts</Link>
    <br />
    <Link to="/work/">Go to work posts</Link>
  </div>
)

export default IndexPage
