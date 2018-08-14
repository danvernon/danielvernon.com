import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class WorkItemsTemplate extends Component {
    render() {
        const post = this.props.data.allWordpressWpWork.edges[0].node
        console.log(this.props.data.allWordpressWpWork.edges[0].node)

        return (
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <img src={post.featured_media.source_url} />

              Title
            </div>
        )
    }
}


export default WorkItemsTemplate

export const pageQuery = graphql`
    query currentWorkQuery {
        allWordpressWpWork {
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
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
