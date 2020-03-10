import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from 'app/Routes/Home';

export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Redirect from="*" to="/" />
  </Router>
);
