import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TreeItem from './TreeItem';

const List = styled.div`
  margin: 0;
  display: block;
  padding: 0;
`;

const SLink = styled(Link)`
  border: 1px solid transparent;
  display: flex;
  padding: 7px 24px 7px 16px;
`;

const ItemList = styled.div`
  margin-left: 16px;
  display: ${props => (props.toggle ? 'block' : 'none')};
`;

function Tree({ list }) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = e => {
    setToggle(!toggle);
  };

  return (
    <List>
      <SLink
        to={list.path === 'home' ? '/' : `/site/${list.path}`}
        onClick={toggleHandler}
      >
        {list.title}
      </SLink>
      <ItemList toggle={toggle}>
        {list.item_list.length > 0 ? (
          <TreeItem site={list} toggle={toggle} />
        ) : null}
      </ItemList>
    </List>
  );
}

export default Tree;
