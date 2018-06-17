import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import avatar from '../../assets/photos/1.jpg'

const Header = () => (
  <header className={styles.header}>
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
