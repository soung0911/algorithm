import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TreeItem from './TreeItem';

const List = styled.div``;

const SLink = styled(Link)``;

const ItemList = styled.div`
  display: ${props => (props.toggle ? 'block' : 'none')};
`;

function Tree({ list }) {
  const [state, setState] = useState(false);

  const handleClickToggle = e => {
    setState(!state);
  };

  return (
    <List>
      <SLink
        to={
          list.path === 'home' ? '/algorithm' : `/algorithm/site/${list.path}`
        }
        onClick={handleClickToggle}
      >
        {list.title}
      </SLink>
      <ItemList toggle={state}>
        {list.item_list.length > 0 ? <TreeItem site={list} /> : null}
      </ItemList>
    </List>
  );
}

export default Tree;
