import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Card } from 'components';
import { mdApi, dataApi } from '../../api';

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

function Site() {
  const { title } = useParams();
  const [mdData, setMdData] = useState({ error: false, text: '' });
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setMdData(await mdApi.getSite(title));
    };

    const getSiteData = async () => {
      setSiteData(await dataApi.getSiteData(title));
    };

    getData();
    getSiteData();
  }, [title]);

  return (
    <>
      {mdData && !mdData.error ? (
        <>
          <div className="markdown-body">
            <ReactMarkdown source={mdData.text} />
          </div>
          <Grid>
            <Card data={siteData} />
          </Grid>
        </>
      ) : (
        '사이트를 찾지 못했습니다.'
      )}
    </>
  );
}

export default Site;
