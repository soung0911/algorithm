import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 2000;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  background-color: white;
`;

const Title = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  :hover {
    color: rgb(56, 132, 255);
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Container>
      <Title>
        <Link to={'/'} replace>
          Petros_K : Algorithm
        </Link>
      </Title>
    </Container>
  );
}

export default Header;
