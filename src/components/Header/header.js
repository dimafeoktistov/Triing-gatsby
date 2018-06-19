import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import avatar from '../../assets/photos/1.jpg'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'

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
        <nav>
          <ul className={styles.navigation}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/about/">
              About
            </Link>
            <Link className={styles.link} to="/contact/">
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
