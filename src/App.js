import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, Sidebar, Content, Header, Router } from 'components';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <GlobalStyles />
          <Sidebar />
          <Content>
            <Header />
            <Router />
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
