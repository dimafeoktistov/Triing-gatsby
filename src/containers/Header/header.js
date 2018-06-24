import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'
import logo from '../../assets/svg/logo.png'

import Navlinks from '../../components/NavLinks/navlinks'

class Header extends React.Component {
  state = {
    isFloat: false,
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
    let headerStyles
    if (!this.state.isFloat) {
      headerStyles = [styles.header]
    } else {
      headerStyles = [styles.header, styles.moving]
    }
    return (
      <header className={headerStyles.join(' ')}>
        <div className={styles.title}>
          <img className={styles.logo} src={logo} alt="logo" />
          <Link to="/">Dima Feoktistov - Ph.D.</Link>
        </div>
        <Navlinks />
      </header>
    )
  }
}

export default Header
