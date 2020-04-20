import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Item = styled.div`
  :hover {
    background-color: #e6ecf1;
  }
`;

const ItemLink = styled(Link)`
  display: flex;
  padding: 7px 24px 7px 16px;
  border: 1px solid transparent;
  ${(props) =>
    props.current &&
    css`
      background-color: white;
      color: rgb(56, 132, 255);
      border: 1px solid transparent;
      border-color: #e6ecf1 !important;
      border-right: 0;
    `}
`;

function TreeItem({ site }) {
  const { pathname } = useLocation();

  return (
    <>
      {site.item_list.map((item, itemkey) => {
        const linkPath = `/problem/${site.path}/${item.title.replace(
          /(\s*)/g,
          ''
        )}`;
        return (
          <Item key={itemkey}>
            <ItemLink
              to={linkPath}
              current={pathname === linkPath ? 1 : 0}
              replace
            >
              {item.title}
            </ItemLink>
          </Item>
        );
      })}
    </>
  );
}

export default TreeItem;
