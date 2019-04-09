import React from 'react';
import './articleBody.scss';

const ArticleBody = (props) => {
  const { text } = props;
  return (
    <section>
      <p className="bodyText">{text}</p>
    </section>
  );
};

export default ArticleBody;
