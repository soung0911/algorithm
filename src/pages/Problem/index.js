import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Problem(props) {
  const {
    match: {
      params: { path, title }
    }
  } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      await fetch(
        require(`../../posts/${path}/${title.replace(/(\s*)/g, '')}_p.md`)
      ).then(response => {
        response.text().then(text => {
          setText(text);
        });
      });
    };

    getData();
  }, [props]);

  return (
    <div class="markdown-body">
      <ReactMarkdown source={text} />
    </div>
  );
}

export default Problem;
