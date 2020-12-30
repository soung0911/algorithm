import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tree } from 'components';
import { dataApi } from '../../api';

const Aside = styled.aside`
  position: fixed;
  width: 16.5rem;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
  padding-top: 1rem;
  margin: 0;
  overflow-y: auto;
  @media (max-width: 719px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.2s ease;
  }
`;

function Sidebar({ open }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await dataApi.getAllData());
    };

    getData();
  }, []);

  return (
    <Aside open={open}>
      {data.map((list, key) => {
        return <Tree key={key} list={list} />;
      })}
    </Aside>
  );
}

export default Sidebar;
