import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: visible;
  height: 50px;
  padding: 0 8px;
  z-index: 2;
  font-size: 0.85em;
  color: #7e888b;
  background: 0 0;
`;

function Header() {
  return <Container></Container>;
}

export default Header;
