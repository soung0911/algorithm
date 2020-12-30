import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path="/" exact  />
    <Route path="/site/:title"/>
    <Route path="/problem/:path/:title" />
    <Redirect from="*" to="/" />
  </Switch>
);
