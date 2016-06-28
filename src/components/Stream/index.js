import React, {Component, PropTypes} from 'react';
import './stream.js';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Stream extends Component {

  render() {
    return (
      <div id='stream'></div>
    );
  }
}

export default CSSModules(Stream, styles);
