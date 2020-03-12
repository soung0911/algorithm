import React from 'react';
import styled from 'styled-components';
import { Tree } from 'components';
import { sidebar } from 'data';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  overflow-y: auto;
  width: 300px;
  color: #364149;
  background: #fafafa;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  transition: left 250ms ease;
`;

const Navigation = styled.nav`
  padding-left: 30px;
`;

function Sidebar() {
  return (
    <Container>
      <Navigation>
        {sidebar.map((list, listkey) => {
          return <Tree key={listkey} list={list} />;
        })}
      </Navigation>
    </Container>
  );
}

export default Sidebar;
