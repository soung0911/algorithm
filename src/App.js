import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles, Sidebar, Content, Header, Router } from 'components';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyles />
          <Header />
          <Sidebar />
          <Content>
            <Router />
          </Content>
        </HashRouter>
      </>
    );
  }
}

export default App;
