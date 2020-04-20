import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { mdApi } from '../../api';

function Home() {
  const [mdData, setMdData] = useState({ error: false, text: '' });

  useEffect(() => {
    const getData = async () => {
      setMdData(await mdApi.getHome());
    };

    getData();
  }, []);

  return (
    <div className="markdown-body">
      <ReactMarkdown source={mdData.text} />
    </div>
  );
}

export default Home;
