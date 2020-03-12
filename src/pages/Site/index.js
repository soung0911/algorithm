import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Site(props) {
  const {
    match: {
      params: { title }
    }
  } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    const getData = async () => {
      await fetch(require(`../../posts/site/${title}.md`)).then(response => {
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

export default Site;
