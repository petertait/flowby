import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/index';
import Home from './containers/Home/index';
import About from './containers/About/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
