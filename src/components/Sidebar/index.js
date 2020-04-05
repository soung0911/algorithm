import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tree } from 'components';
import { dataApi } from '../../api';

const Aside = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 20%;
  padding-top: 32px;
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
`;

function Sidebar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await dataApi.getAllData());
    };

    getData();
  }, []);

  return (
    <Aside>
      {data.map((list, key) => {
        return <Tree key={key} list={list} />;
      })}
    </Aside>
  );
}

export default Sidebar;
