import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class WorkItemsTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <div>
                {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} /> */}
                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}

                Title
            </div>
        )
    }
}


export default WorkItemsTemplate

export const pageQuery = graphql`
    query currentWorkQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
