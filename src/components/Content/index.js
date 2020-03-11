import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 300px;
  bottom: 0;
  overflow-y: auto;
  color: #000;
  background: #fff;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
`;

const Container2 = styled.div`
  position: relative;
  outline: 0;
`;

const Inner2 = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 15px 40px;
`;

function Content({ children }) {
  return (
    <Container>
      <Inner>
        {children[0]}
        <Container2>
          <Inner2>{children[1]}</Inner2>
        </Container2>
      </Inner>
    </Container>
  );
}

export default Content;
