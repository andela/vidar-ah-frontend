import React from 'react';
import PropTypes from 'prop-types';
import './articleDescription.scss';

const ArticleDescription = (props) => {
  const { description } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <p className="description-text">{description}</p>
    </div>
  );
};

ArticleDescription.propTypes = {
  description: PropTypes.string.isRequired
};
export default ArticleDescription;
