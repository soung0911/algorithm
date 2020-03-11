import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home, Problem, Site } from 'pages';

export default () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/site/:title" exact component={Site} />
    <Route path="/problem/:path/:title" component={Problem} />
    <Redirect from="*" to="/" />
  </>
);
