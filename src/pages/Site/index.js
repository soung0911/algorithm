import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Api } from '../../api';

function Site(props) {
  const {
    match: {
      params: { title }
    }
  } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      setText(await Api.getSite(title));
    };

    getData();
  }, [props]);

  return (
    <div className="markdown-body">
      <ReactMarkdown source={text} />
    </div>
  );
}

export default Site;
