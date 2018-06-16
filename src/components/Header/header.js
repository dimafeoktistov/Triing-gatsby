import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import avatar from '../../assets/photos/1.jpg'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.top}>
      <img
        src={avatar}
        alt="avatar of dima feoktistov"
        className={styles.avatar}
      />
      <div className={styles.description}>
        <h1 className={styles.title}>
          <Link className={styles.title} to="/">
            {siteTitle}
          </Link>
        </h1>
        {/*<p>
          Hello everyone! I am experiencied biologist and not very experiencied
          web-deleoper at the moment. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ea dolores fuga quaerat quisquam minima eum,
          laborum, delectus cumque voluptatibus officia reprehenderit veritatis
          non atque aperiam quod corrupti culpa ab voluptates!
        </p>*/}
      </div>
    </div>
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
