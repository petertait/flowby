import React, {Component, PropTypes} from 'react';
import Dropbox from '../../dropbox.js';

import CSSModules from 'react-css-modules';

import styles from "./styles.css";

class Auth extends Component {

  authenticate() {
    var loginLocation = window.location.href;
    Dropbox.authenticate( { client_id: 'qbryowo5frs09ht', redirect_uri: loginLocation },
      function(){
        console.log(loginLocation);
      }
    );
  }

  render() {
    return (
      <button onClick={this.authenticate} styleName='button'>Login</button>
    );
  }
}

export default CSSModules(Auth, styles);
