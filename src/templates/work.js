import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class WorkItemsTemplate extends Component {
    render() {
        const post = this.props.data.allWordpressWpWork.edges[0].node

        return (
            <div>
              <div className='container'>
                <div className='work-header'>

                </div>
                <div className='work-intro'>

                  <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                  { post.acf.project_tagline !== null &&
                    <p>
                      { post.acf.project_tagline }
                    </p>
                  }

                </div>
              </div>

              { post.acf.project_featured_image !== null &&

                <div className='work-image-container'>
                  <div
                    className='work-image'
                    style={{ backgroundImage: `url(${post.acf.project_featured_image.source_url})` }}
                  >

                  </div>
                </div>

              }

              <div className='container'>

                <div className='work-description'>
                  <div>
                    <h5 className='work-header'>Project Overview</h5>
                    { post.acf.project_description !== null &&
                      <p dangerouslySetInnerHTML={{ __html: post.acf.project_description }} />
                    }
                  </div>
                  <div>
                    <h5 className='work-header'>Role</h5>
                    { post.acf.project_involvement !== null &&
                      <p dangerouslySetInnerHTML={{ __html: post.acf.project_involvement }} />
                    }
                    <h5 className='work-header'>Launch Date</h5>
                    { post.acf.project_completion_date !== null &&
                      <p dangerouslySetInnerHTML={{ __html: post.acf.project_completion_date }} />
                    }
                  </div>
                  <div>
                    <h5 className='work-header'>Visit Site</h5>
                    { post.acf.project_link !== null &&
                      <a href={ post.acf.project_link } title={ post.acf.project_link_title } target='_blank'>{ post.acf.project_link_title }</a>
                    }
                  </div>
                </div>
              </div>

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
                    acf {
                        project_description
                        project_tagline
                        project_featured_image {
                            id
                            source_url
                        }
                        project_involvement
                        project_completion_date
                        project_link
                        project_link_title
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
