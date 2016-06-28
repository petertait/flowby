import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import Preview from '../../components/Preview';

import styles from './styles.css';

class Stream extends Component {

  render() {
    return (
      <Preview />
    );
  }
}

export default CSSModules(Stream, styles);
