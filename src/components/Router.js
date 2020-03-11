import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home, Problem, Site } from 'pages';

export default () => (
  <>
    <Route path="/algorithm" exact component={Home} />
    <Route path="/algorithm/site/:title" exact component={Site} />
    <Route path="/algorithm/problem/:path/:title" component={Problem} />
    <Redirect from="*" to="/algorithm" />
  </>
);
