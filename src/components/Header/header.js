import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link className={styles.title} to="/">
        {siteTitle}
      </Link>
    </h1>
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

export default Header
