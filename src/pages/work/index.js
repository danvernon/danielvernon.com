import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

class WorkTemplate extends Component {
    render() {
        const data = this.props.data
        console.log(data.allWordpressWpWork.edges)

    return (
      <div>

        <h1>Posts</h1>

        {data.allWordpressWpWork.edges.map(({node}) => (

          <div key={node.id} className='post' style={{ marginBottom: 50 }}>
            <Link to={'/work/' + node.slug}>
              <h3>{node.title}</h3>
              <img src={node.featured_media.source_url} />
            </Link>
          </div>

        ))}

      </div>
    )
  }
}

WorkTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default WorkTemplate

export const pageQuery = graphql`
  query workQuery{
        allWordpressWpWork{
            edges {
              node {
                  id
                  title
                  slug
                  featured_media {
                      source_url
                  }
              }
            }
        }
    }
`
