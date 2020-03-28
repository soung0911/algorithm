import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      await fetch(require(`../../posts/home/home.md`)).then(response => {
        response.text().then(text => {
          setText(text);
        });
      });
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
