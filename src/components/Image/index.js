import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Styles from './styles.css'

class Image extends Component {

  render() {
    return (
      <img src='https://i.guim.co.uk/img/media/9b9694531c20a1419a0b26f1b9a4413175549eed/0_334_3565_2507/master/3565.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=1bc9764c042d61a3692cfccc5b865d39' alt='' />
    )
  }
}

Image.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Image, Styles)
