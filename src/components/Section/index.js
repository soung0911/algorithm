import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 20%;
  top: 60px;
  position: relative;
`;

const Article = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px 40px;
`;

function Section({ children }) {
  return (
    <Container>
      <Article>{children}</Article>
    </Container>
  );
}

export default Section;
