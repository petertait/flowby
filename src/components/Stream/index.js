import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Image from './../Image'

import Styles from './styles.css'

class Stream extends Component {
  renderImage(key) {
    return (
      <Image key={key} index={key} url={this.props.state.images.image}/>
    )
  }

  render() {
    return (
      <section styleName='container'>
        {Object.keys(this.props.state.images).map(this.renderImage)}
      </section>
    )
  }
}

Stream.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Stream, Styles)
