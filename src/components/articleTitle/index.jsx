import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ArticleTitle = (props) => {
  const { text } = props;
  return (
    <section>
      <h1 className="title">{text}</h1>
    </section>
  );
};

ArticleTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticleTitle;
