import React from 'react';
import PropTypes from 'prop-types';
import './articleTitle.scss';

const ArticleTitle = (props) => {
  const { title } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="title">{title}</h1>
    </div>
  );
};


ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired
};
export default ArticleTitle;
