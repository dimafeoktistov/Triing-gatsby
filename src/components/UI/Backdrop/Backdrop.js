import React from 'react'

import classes from './Backdrop.module.scss'

const backdrop = props =>
  props.show ? (
    <div className={classes.backdrop} onClick={props.clicked} />
  ) : null

export default backdrop
