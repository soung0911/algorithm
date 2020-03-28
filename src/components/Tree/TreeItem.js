import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid transparent;
  padding: 7px 24px 7px 16px;
`;

function TreeItem({ site }) {
  return (
    <>
      {site.item_list.map((item, itemkey) => {
        return (
          <Item key={itemkey}>
            <Link
              to={`/problem/${site.path}/
							${item.title}`}
            >
              {item.title}
            </Link>
          </Item>
        );
      })}
    </>
  );
}

export default TreeItem;
