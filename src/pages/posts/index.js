import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

    return (
      <div>

        <h1>Posts</h1>

        {data.allWordpressPost.edges.map(({node}) => (

          <div key={node.id} className='post' style={{ marginBottom: 50 }}>
            <Link to={'/posts/' + node.slug}>
              <h3>{node.title}</h3>
              <img src={node.featured_media.localFile.childImageSharp.resolutions.src} />
            </Link>
            <div className='post-content' dangerouslySetInnerHTML={{__html: node.excerpt}} />
            {node.date}
          </div>

        ))}

      </div>
    )
  }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    featured_media {
                      source_url
                      localFile {
                        childImageSharp {
                          resolutions(width:300) {
                            src
                            width
                          }
                        }
                      }
                    }
                }
            }
        }
    }
`
