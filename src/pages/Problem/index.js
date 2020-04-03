import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Api } from '../../api';

function Problem(props) {
  const {
    match: {
      params: { path, title }
    }
  } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      setText(await Api.getProblem(path, title));
    };

    getData();
  }, [props]);

  return (
    <div className="markdown-body">
      <ReactMarkdown source={text} />
    </div>
  );
}

export default Problem;
