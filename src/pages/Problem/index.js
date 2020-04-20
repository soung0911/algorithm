import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { mdApi } from '../../api';

function Problem() {
  const { path, title } = useParams();
  const [mdData, setMdData] = useState({ error: false, text: '' });

  useEffect(() => {
    const getData = async () => {
      setMdData(await mdApi.getProblem(path, title));
    };

    getData();
  }, [path, title]);

  return (
    <>
      {mdData && !mdData.error ? (
        <div className="markdown-body">
          <ReactMarkdown source={mdData.text} />
        </div>
      ) : (
        '문제를 찾지 못했습니다.'
      )}
    </>
  );
}

export default Problem;
