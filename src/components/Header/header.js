import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'
import Navlinks from '../NavLinks/navlinks'
import SidebarButton from '../Sidebar/sidebarButton'

const Header = props => {
  let headerStyles
  if (!props.isFloat) {
    headerStyles = [styles.header]
  } else {
    headerStyles = [styles.header, styles.moving]
  }
  return (
    <div>
      <header className={headerStyles.join(' ')}>
        <div className={styles.title}>
          <Link to="/">Dima Feoktistov - Ph.D.</Link>
        </div>
        <Navlinks />
        <SidebarButton drawerToggleClicked={props.drawerToggleClicked} />
      </header>
    </div>
  )
}

export default Header
