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
      .debounceTime(10)
      .subscribe(e => {
        console.log('this.state.isFloat', this.state.isFloat)
        if (window.scrollY > 2) {
          window.scrollY > previous
            ? this.setState({ isFloat: true })
            : this.setState({ isFloat: false })
          previous = window.scrollY
        } else {
          this.setState({ isFloat: false })
        }
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

//  Old styles
// <div className={styles.top}>
//   <img
//     src={avatar}
//     alt="avatar of dima feoktistov"
//     className={styles.avatar}
//   />
//   <div className={styles.description}>
//     <h1 className={styles.title}>
//       <Link className={styles.title} to="/">
//         {siteTitle}
//       </Link>
//     </h1>
//   </div>
// </div>
