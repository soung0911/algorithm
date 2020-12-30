import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, Sidebar, Section, Header, Router } from 'components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <BrowserRouter basename='/algorithm'>
          <GlobalStyles />
          <Header open={this.state.open} setOpen={this.setOpen} />
          <Sidebar open={this.state.open} />
          <Section>
            <Router />
          </Section>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
