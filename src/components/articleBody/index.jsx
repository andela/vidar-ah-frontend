import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ArticleBody = (props) => {
  const { text } = props;
  return (
    <section>
      <p className="body-text">{text}</p>
    </section>
  );
};

ArticleBody.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticleBody;
