import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
`;

const SLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  border-bottom: none;
  color: #364149;
  background: 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

function Tree({ list }) {
  return (
    <List>
      {list.map((site, sitekey) => {
        return (
          <Item key={sitekey}>
            <SLink
              to={
                site.path === 'home'
                  ? '/algorithm'
                  : `/algorithm/site/${site.path}`
              }
            >
              {site.title}
            </SLink>
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
          </Item>
        );
      })}
    </List>
  );
}

export default Tree;
