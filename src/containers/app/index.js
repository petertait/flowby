import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import styles from "./styles.css"

class App extends Component {
  render() {
    return (
      <div styleName='container'>
        <h1>{'React App'}</h1>
        <ul>
          <li><Link to="/">{'Home'}</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default CSSModules(App, styles)
