import React from 'react';
import './articleTitle.scss';

const ArticleTitle = (props) => {
  const { text } = props;
  return (
    <section>
      <h1 className="title">{text}</h1>
    </section>
  );
};

export default ArticleTitle;
