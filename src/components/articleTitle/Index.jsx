/* eslint-disable react/prop-types */
import React from 'react';
import './articleTitle.scss';

const ArticleTitle = (props) => {
  const { title } = props;
  return (
    <div className="align-title">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default ArticleTitle;
