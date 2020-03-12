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
      await fetch(require(`../../posts/${path}/${title}_p.md`)).then(
        response => {
          response.text().then(text => {
            setText(text);
          });
        }
      );
    };

    getData();
  }, [props]);

  return <ReactMarkdown source={text} />;
}

export default Problem;