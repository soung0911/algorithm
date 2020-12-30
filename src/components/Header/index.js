import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  right: 0;
  height: 3.6rem;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  z-index: 20;
  @media (max-width: 719px) {
    padding-left: 4rem;
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: none;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  padding: 0.6rem;
  top: 0.5rem;
  left: 1rem;
  @media (max-width: 719px) {
    display: block;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  position: relative;
  :hover {
    color: rgb(56, 132, 255);
    cursor: pointer;
  }
  @media (max-width: 719px) {
    width: calc(100vw - 9.4rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

function Header({ open, setOpen }) {
  return (
    <Container>
      <Button open={open} onClick={() => setOpen()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          className="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
      </Button>
      <Link to={'/'} replace>
        <Title>Petros_K : Algorithm</Title>
      </Link>
    </Container>
  );
}

export default Header;
