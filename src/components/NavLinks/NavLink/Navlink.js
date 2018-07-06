import Link from 'gatsby-link'
import React from 'react'
import styles from './navlink.module.scss'
import Aux from '../../../HOCS/Aux'

const Navlink = props => {
  return (
    <Aux>
      <Link
        className={props.active ? styles.active : styles.navlink}
        to={props.to}
        onClick={props.clicked}
      >
        {props.children}
      </Link>
    </Aux>
  )
}

export default Navlink
