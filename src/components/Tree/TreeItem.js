import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div``;

const Item = styled.div``;

const SLink = styled(Link)``;

function TreeItem({ site }) {
  return (
    <List>
      {site.item_list.map((item, itemkey) => {
        return (
          <Item key={itemkey}>
            <SLink to={`/algorithm/problem/${site.path}/${item.title}`}>
              {item.title}
            </SLink>
          </Item>
        );
      })}
    </List>
  );
}

export default TreeItem;
