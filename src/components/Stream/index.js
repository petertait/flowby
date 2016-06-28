import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Stream extends Component {

  render() {
    return (
      <div styleName='stream'></div>
    );
  }
}

export default CSSModules(Stream, styles);
