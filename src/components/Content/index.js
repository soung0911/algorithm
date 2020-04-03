import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-left: 20%;
  top: 60px;
  position: relative;
`;

const Article = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px 40px;
`;

function Content({ children }) {
  return (
    <Section>
      <Article>{children}</Article>
    </Section>
  );
}

export default Content;
