import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Header from '../../components/Header'
import Stream from '../../components/Stream'

import Vars from '../../vars'
import Styles from './styles.css'

class App extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = 'white'
  }

  constructor() {
    super()

    this.state = {
      images : require('../../sample')
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Stream images={this.state.images} {...this.props} />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default CSSModules(App, Styles)
