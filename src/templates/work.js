import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class WorkItemsTemplate extends Component {
  render() {
    const post = this.props.data.wordpressWpWork
    const resolutions = post.acf.project_featured_image.localFile.childImageSharp.resolutions

    return (
      <div>
        <div className='container'>
          <div className='work-header'>
            <a href='../../work/'>
              <svg width="54" height="23" viewBox="891 572 54 23" xmlns="http://www.w3.org/2000/svg"><path d="M891.19 594v-21.18h3.45v5.46l-.09 2.46c1.23-1.08 2.76-1.83 4.26-1.83 3.69 0 5.82 2.94 5.82 7.47 0 5.07-3.03 7.98-6.3 7.98-1.35 0-2.79-.66-4.02-1.86h-.09l-.3 1.5h-2.73zm3.45-3.72c1.05.9 2.1 1.23 2.97 1.23 1.95 0 3.45-1.74 3.45-5.07 0-2.94-.96-4.68-3.18-4.68-1.08 0-2.1.54-3.24 1.65v6.87zm10.605-.24c0-3.15 2.64-4.8 8.67-5.46-.03-1.56-.69-2.88-2.67-2.88-1.47 0-2.85.66-4.14 1.44l-1.26-2.31c1.62-1.02 3.69-1.92 6.03-1.92 3.69 0 5.49 2.25 5.49 6.36V594h-2.82l-.27-1.62h-.09c-1.32 1.11-2.82 1.98-4.56 1.98-2.58 0-4.38-1.74-4.38-4.32zm3.36-.27c0 1.32.87 1.89 2.1 1.89 1.2 0 2.13-.6 3.21-1.62v-3.3c-3.99.51-5.31 1.56-5.31 3.03zm10.125-3.12c0 4.89 3.09 7.71 7.11 7.71 1.68 0 3.45-.66 4.83-1.89l-1.44-2.19c-.81.66-1.83 1.26-3.03 1.26-2.31 0-3.93-1.95-3.93-4.89 0-2.97 1.65-4.92 4.02-4.92.93 0 1.71.39 2.49 1.08l1.65-2.19c-.99-.96-2.43-1.71-4.32-1.71-3.93 0-7.38 2.82-7.38 7.74zm12.945 7.35h3.39v-3.75l2.31-2.64 3.78 6.39h3.75l-5.55-8.73 5.04-6h-3.78l-5.46 6.78h-.09v-13.23h-3.39V594z" fillOpacity=".2" fill="#1C1F23" fillRule="evenodd"></path></svg>
            </a>
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
              style={{ backgroundImage: `url(${resolutions.src})` }}
            >

            </div>
          </div>

        }

        <div className='container'>

          <div className='work-description'>
            <div>
              <h5 className='work-title'>Project Overview</h5>
              { post.acf.project_description !== null &&
                <p dangerouslySetInnerHTML={{ __html: post.acf.project_description }} />
              }
            </div>
            <div>
              <h5 className='work-title'>Role</h5>
              { post.acf.project_involvement !== null &&
                <p dangerouslySetInnerHTML={{ __html: post.acf.project_involvement }} />
              }
              <br />
              <h5 className='work-title'>Launch Date</h5>
              { post.acf.project_completion_date !== null &&
                <p dangerouslySetInnerHTML={{ __html: post.acf.project_completion_date }} />
              }
            </div>
            <div>
              <h5 className='work-title'>Visit Site</h5>
              { post.acf.project_link !== null &&
                <a href={ post.acf.project_link } title={ post.acf.project_link_title } target='_blank'>{ post.acf.project_link_title }</a>
              }
            </div>
          </div>
          <div className='section'>

            { console.log(post.acf.section_one_gallery) }
            { post.acf.section_one_gallery.map((layout, i) => {

              return (
                <div key={i}>
                  {post.acf.section_one_gallery.map(({ picture }) => {

                    if (layout.__typename === `WordPressAcf_image_gallery`) {

                      const img = post.acf.section_one_gallery.source_url
                      const id = post.acf.section_one_gallery.id
                      return (
                        console.log(i)
                        // <img
                        //   key={id}
                        //   src={img}
                        // />
                      )
                    }
                  })}
               </div>
              )

            })}

          </div>
        </div>

      </div>
    )
  }
}


export default WorkItemsTemplate

export const pageQuery = graphql`
query currentProjectQuery($id: String!) {
    wordpressWpWork(id: { eq: $id }) {
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
          localFile {
            childImageSharp {
              resolutions(width:1400) {
                src
                width
              }
            }
          }
        }
        project_involvement
        project_completion_date
        project_link
        project_link_title
        section_one_gallery {
          source_url
          id
          localFile {
            childImageSharp {
              resolutions(width:1400) {
                src
                width
              }
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
