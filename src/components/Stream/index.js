import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Image from './../Image'

import Styles from './styles.css'

class Stream extends Component {

  render() {
    return (
      <section styleName='container'>
        <Image />
      </section>
    )
  }
}

Stream.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Stream, Styles)
