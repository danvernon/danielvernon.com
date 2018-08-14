import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import MainMenu from '../components/menu/mainmenu'
import '../assets/stylesheets/styles.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Daniel Vernon - Designer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {/* <MainMenu menu={data}/> */}
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          id
          name
          items {
            title
            url
            object_slug
          }
        }
      }
    }
  }
`
