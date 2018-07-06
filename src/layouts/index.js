import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'
import Aux from '../HOCS/Aux.js'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'
import SideBar from '../components/Sidebar/Sidebar'

export default class Layout extends Component {
  state = {
    isFloat: false,
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  componentDidMount() {
    let previous = window.scrollY
    Observable.fromEvent(window, 'scroll')
      .debounceTime(50)
      .subscribe(e => {
        window.scrollY > previous
          ? this.setState({ isFloat: true })
          : this.setState({ isFloat: false })
        previous = window.scrollY
      })
  }

  render() {
    const { children, data } = this.props
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Dmitriy Feoktistov personal page',
            },
            {
              name: 'keywords',
              content: 'botanist, biologist, front-end, development',
            },
          ]}
        />
        <Header
          floating={this.state.isFloat}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideBar
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
