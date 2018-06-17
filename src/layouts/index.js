import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'
import Aux from '../HOCS/Aux.js'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Dmitriy Feoktistov personal page' },
        {
          name: 'keywords',
          content: 'botanist, biologist, front-end, development',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Aux>{children()}</Aux>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
