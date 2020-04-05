import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { mdApi } from '../../api';

function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      setText(await mdApi.getHome());
    };

    getData();
  }, []);

  return (
    <div className="markdown-body">
      <ReactMarkdown source={text} />
    </div>
  );
}

export default Home;
