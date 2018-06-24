import React from 'react'
import Link from 'gatsby-link'
import styles from './navlinks.module.scss'

const Navlinks = props => {
  return (
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
  )
}

export default Navlinks
