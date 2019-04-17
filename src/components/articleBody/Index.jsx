import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './articleBody.scss';

const ArticleBody = (props) => {
  const { body } = props;
  return (
    <div className="align-div body-text">
      {ReactHtmlParser(body)}
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
