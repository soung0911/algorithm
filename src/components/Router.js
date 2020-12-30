import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Problem, Site } from '../pages';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/site/:title" component={Site} />
    <Route path="/problem/:path/:title" component={Problem} />
    <Redirect from="*" to="/" />
  </Switch>
);
