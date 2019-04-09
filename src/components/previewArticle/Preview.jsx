/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../button/Button';
import ArticleTitle from '../articleTitle/ArticleTitle';
import ArticleBody from '../articleBody/ArticleBody';
import Spinner from '../spinner/Spinner';
import '../../views/createArticle/createArticle.scss';

export default function Preview(props) {
  const {
    onSubmit, article, continueEdit, loading
  } = props;
  return (
    <div className="form-field">
      <div className="form text-center">
        <ArticleTitle title={article.title || ''} />
        <img
          alt="image"
          src={article.images ? URL.createObjectURL(article.images) : 'https://via.placeholder.com/700x400'}
          className="header-img img-responsive"
        />
        <ArticleBody body={article.body || ''} />
      </div>
      <div className="center-button">
        {
          loading
            ? <Spinner />
            : (
              <Container>
                <Row>
                  <Col md={{ span: 1, offset: 4 }}>
                    <Button text="Edit" onClick={continueEdit} />
                  </Col>
                  <Col md={{ span: 1, offset: 1 }}>
                    <Button onClick={onSubmit} text="Publish" />
                  </Col>
                </Row>
              </Container>
            )
        }
      </div>
    </div>
  );
}

Preview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  continueEdit: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

Preview.defaultProps = {
  loading: false
};
