import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const resolutions = post.featured_media.localFile.childImageSharp.resolutions

    return (
      <div>
        <Img resolutions={resolutions} />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}


export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        id
        source_url
        localFile {
          childImageSharp {
            resolutions(width:300, height:300) {
              src
              width
              height
            }
          }
        }
      }
    }
    site {
      siteMetadata {
          title
          subtitle
      }
    }
  }
`
