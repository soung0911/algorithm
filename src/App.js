import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
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
        <HashRouter>
          <GlobalStyles />
          <Header open={this.state.open} setOpen={this.setOpen} />
          <Sidebar open={this.state.open} />
          <Section>
            <Router />
          </Section>
        </HashRouter>
      </>
    );
  }
}

export default App;
