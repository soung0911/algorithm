import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 2000;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  background-color: white;
`;

function Header() {
  return <Container></Container>;
}

export default Header;
