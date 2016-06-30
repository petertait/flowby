import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Styles from './styles.css'

class Image extends Component {

  render() {
    return (
      <img src='https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiO47m-utDNAhVnDsAKHZoPAooQjRwIBw&url=http%3A%2F%2Fwww.bloomingrand.com%2F&psig=AFQjCNGJ6QlxRo5ocWvx-cfsEYFHYBHTxQ&ust=1467400366179592' alt='' />
    )
  }
}

Image.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Image, Styles)
