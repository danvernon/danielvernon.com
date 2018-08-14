import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

class WorkTemplate extends Component {
    render() {
        const data = this.props.data

    return (
      <div>

        <div className='container'>
          <div className='post-intro'>
            <p className='post-text'>
              A multidisciplinary designer working with companies to better their digital presence.
              Some of those companies include CBRE, Halfords, KICCA, A Plus and Tifosy.
            </p>
            <p className='post-text'>
              Currently building Draft, but available to take on new projects.
            </p>
          </div>
        </div>

        <div className='post-container'>

          {data.allWordpressWpWork.edges.map(({node}) => (

            <Link to={'/work/' + node.slug} key={node.id} >
              <div
                className='post'
                style={{ backgroundImage: `url(${node.featured_media.localFile.childImageSharp.resolutions.src})` }}>

                <div
                  className='post-hover'
                  style={{ backgroundColor: `${node.acf.hover_background_color}` }}>
                  <h3>{node.title}</h3>
                </div>
              </div>

            </Link>

          ))}

        </div>
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
            localFile {
              childImageSharp {
                resolutions(width:1000) {
                  src
                  width
                }
              }
            }
          }
          acf {
            hover_background_color
          }
        }
      }
    }
  }
`
