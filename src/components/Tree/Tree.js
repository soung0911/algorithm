import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import TreeItem from './TreeItem';

const List = styled.div`
  margin: 0;
  display: block;
  padding: 0;
`;

const Item = styled.div`
  ${(props) =>
    props.current
      ? ``
      : css`
          :hover {
            background-color: #e6ecf1;
          }
        `}
`;

const ItemText = styled.span`
  flex: 1;
`;

const ItemLink = styled(Link)`
  border: 1px solid transparent;
  display: flex;
  padding: 7px 24px 7px 16px;
  ${(props) =>
    props.current
      ? css`
          background-color: white;
          color: rgb(56, 132, 255);
        `
      : css`
          background-color: transparent;
        `}
`;

const Arrow = styled.span`
  cursor: pointer;
  margin: -8px;
  display: block;
  padding: 8px;
  position: relative;
  font-size: 18px;
  line-height: 1;
  margin-left: 0;
  ${(props) =>
    props.toggle
      ? css`
          transform: rotateZ(90deg);
        `
      : css``}
`;

const ItemList = styled.div`
  margin-left: 16px;
  display: ${(props) => (props.toggle ? 'block' : 'none')};
`;

function Tree({ list }) {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const path = list.path === 'introduction' ? '/' : `/site/${list.path}`;

  const currentFlag = path === pathname ? 1 : 0;

  return (
    <List>
      <Item current={currentFlag}>
        <ItemLink to={path} current={currentFlag} replace>
          <ItemText>{list.title}</ItemText>
          {path === '/' || list.item_list.length <= 0 ? (
            ''
          ) : (
            <Arrow onClick={toggleHandler} toggle={toggle}>
              <span>
                <svg
                  height="1em"
                  width="1em"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                >
                  <g>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </g>
                </svg>
              </span>
            </Arrow>
          )}
        </ItemLink>
      </Item>
      <ItemList toggle={toggle}>
        {list.item_list.length > 0 ? (
          <TreeItem site={list} toggle={toggle} />
        ) : null}
      </ItemList>
    </List>
  );
}

export default Tree;
