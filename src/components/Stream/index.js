import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import './preview.js';

import styles from './styles.css';

class Stream extends Component {

  render() {
    return (
      <div className='stream' styleName='stream'></div>
    );
  }
}

export default CSSModules(Stream, styles);
