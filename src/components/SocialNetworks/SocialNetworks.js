import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
import FaVk from 'react-icons/lib/fa/vk'
import FaGithub from 'react-icons/lib/fa/github'

import React from 'react'
import styles from './SocialNetworks.module.scss'

export default props => {
  return (
    <div style={props.style} className={styles.social}>
      <a
        href="https://www.facebook.com/dima.feoktistov.9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookOfficial />
      </a>
      <a
        href="https://plus.google.com/u/0/102416570922874443146"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGooglePlusSquare />
      </a>
      <a
        href="https://vk.com/dimafeoktistov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaVk />
      </a>{' '}
      <a
        href="https://github.com/dimafeoktistov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}
