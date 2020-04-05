import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 236, 241);
  border-radius: 3px;
  padding: 8px;
  :hover {
    color: rgb(56, 132, 255);
    border-color: rgb(56, 132, 255);
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Card({ data }) {
  return (
    <>
      {data.item_list &&
        data.item_list.map((it, key) => {
          return (
            <Link
              key={key}
              to={`/problem/${data.path}/${it.title.replace(/(\s*)/g, '')}`}
            >
              <Container>
                <Title>{it.title}</Title>
              </Container>
            </Link>
          );
        })}
    </>
  );
}

export default Card;
