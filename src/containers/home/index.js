import React, {Component, PropTypes} from 'react';
import { browserHistory } from "react-router";
import CSSModules from 'react-css-modules';

import Auth from '../../components/Auth';
import Stream from '../../components/Stream';

import styles from "./styles.css";

class Home extends Component {

  // about() {
  //   browserHistory.push("/about");
  // }

  render() {
    return (
      <div className='container'>
        <div styleName='content'>
          <h1 styleName='header'>Hello world</h1>
          <p styleName='description'>Welcome to React Starter.</p>
        </div>
        <div styleName='content'>
          // <Auth />
          <Stream />
        </div>
      </div>
    );
  }
}

export default (CSSModules(Home, styles));
