import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding-bottom: 2rem;
  display: block;
  padding-left: 16.5rem;
  @media (max-width: 719px) {
    padding-left: 0;
  }
`;

const Article = styled.article`
  max-width: 740px;
  margin: 0 auto;
  padding: 5rem 1rem;
`;

function Section({ children }) {
  return (
    <Container>
      <Article>{children}</Article>
    </Container>
  );
}

export default Section;
