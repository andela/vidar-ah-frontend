import React from 'react';
import './articleBody.scss';

const ArticleBody = (props) => {
  const { text } = props;
  return (
    <section>
      <h3 className="bodyText">{text}</h3>
    </section>
  );
};

export default ArticleBody;
