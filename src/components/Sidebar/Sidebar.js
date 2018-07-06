import React from 'react'

import Navlinks from '../NavLinks/navlinks'
import classes from './Sidebar.module.scss'
import Backdrop from '../UI/Backdrop/Backdrop'
import Aux from '../../HOCS/Aux'

const sideBar = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Navlinks />
      </div>
    </div>
  )
}

export default sideBar
