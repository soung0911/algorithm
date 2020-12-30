import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path="/" exact  />
    <Route path="/site/:title"/>
    <Route path="/problem/:path/:title" />
  </Switch>
);
