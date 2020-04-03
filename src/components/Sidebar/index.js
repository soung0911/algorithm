import React from 'react';
import styled from 'styled-components';
import { Tree } from 'components';
import { sidebar } from 'data';

const Aside = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 20%;
  padding-top: 32px;
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
`;

function Sidebar() {
  return (
    <Aside>
      {sidebar.map((list, key) => {
        return <Tree key={key} list={list} />;
      })}
    </Aside>
  );
}

export default Sidebar;
