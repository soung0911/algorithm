import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles, Sidebar, Section, Header, Router } from 'components';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <GlobalStyles />
          <Header />
          <Sidebar />
          <Section>
            <Router />
          </Section>
        </HashRouter>
      </>
    );
  }
}

export default App;
