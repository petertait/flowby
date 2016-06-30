import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Styles from './styles.css'

class Header extends Component {

  render() {
    return (
      <header styleName='header'>
        <h1>{'React App'}</h1>
        <nav><Link to="/">{'Login'}</Link></nav>
      </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Header, Styles)
