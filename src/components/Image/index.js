import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Styles from './styles.css'

class Image extends Component {

  render() {
    var details = this.props.details;
    return (
      <img src={details.image} alt={details.name} />
    )
  }
}

Image.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Image, Styles)
