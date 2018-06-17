import React from 'react'
import PropTypes from 'prop-types'
import styles from './hero.module.scss'
import arrow from '../../assets/photos/arrow.png'

const Hero = props => {
  return (
    <div className={styles.hero}>
      <div className={styles.herotext}>
        <span>Biology and Web-design</span>
        <h1>Feoktistov Dmitriy</h1>
        <p>
          I am experiencied biologist and not too experiencied web-developer
          yet.
        </p>
      </div>
      <div className={styles.arrow}>
        <a href="#featured" className={styles.arrowdown}>
          <img src={arrow} alt="down arrow" />
        </a>
      </div>
    </div>
  )
}

export default Hero
