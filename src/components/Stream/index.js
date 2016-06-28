import React, {Component, PropTypes} from 'react';
import Dropbox from '../../dropbox.js';
import StreamJS from '../../stream.js';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Stream extends Component {

  render() {
    return (
      <div>
        <button>Test</button>
        <div id='stream'></div>
      </div>
    );
  }
}

export default CSSModules(Stream, styles);
