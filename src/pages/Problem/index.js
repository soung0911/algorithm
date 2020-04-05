import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { mdApi } from '../../api';

function Problem() {
  const { path, title } = useParams();
  const [data, setData] = useState({ error: false, text: '' });

  useEffect(() => {
    const getData = async () => {
      setData(await mdApi.getProblem(path, title));
    };

    getData();
  }, [path, title]);

  return (
    <>
      {data && !data.error ? (
        <div className="markdown-body">
          <ReactMarkdown source={data.text} />
        </div>
      ) : (
        '문제를 찾지 못했습니다.'
      )}
    </>
  );
}

export default Problem;
