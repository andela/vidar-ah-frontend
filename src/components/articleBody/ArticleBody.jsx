import React from 'react';
import PropTypes from 'prop-types';
import './articleBody.scss';

const ArticleBody = (props) => {
  const { body } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <p className="body-text">{body}</p>
    </div>
  );
};

ArticleBody.propTypes = {
  body: PropTypes.string
};

ArticleBody.defaultProps = {
  body: ''
};
export default ArticleBody;
