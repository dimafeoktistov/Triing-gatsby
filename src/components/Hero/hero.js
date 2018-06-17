import React from 'react'
import PropTypes from 'prop-types'

const Hero = props => {
  return (
    <div className="hero">
      <div className="hero-text">
        <span>Biology and Web-design</span>
        <h1>Feoktistov Dmitriy</h1>
        <p>FRONT-END NINJA</p>
      </div>
      <div className="arrow">
        <a href="#featured" className="arrow-down">
          <img src="img/arrow.png" alt="arrow button" />
        </a>
      </div>
    </div>
  )
}

export default Hero
