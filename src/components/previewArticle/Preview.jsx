/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../button/Button';
import ArticleTitle from '../articleTitle/Index';
import ArticleBody from '../articleBody/Index';
import '../../views/createArticle/createArticle.scss';
import Loader from '../loader/Index';

const Preview = (props) => {
  const {
    onSubmit, article, continueEdit, loading
  } = props;

  let image;
  if (!article.image) {
    image = 'https://via.placeholder.com/700x400';
  } else if (typeof article.image === 'string') {
    const { image: img } = article;
    image = img;
  } else {
    image = URL.createObjectURL(article.image);
  }
  return (
    <div>
      {loading && <Loader />}
      <div className="form-field">
        <div className="form text-center">
          <ArticleTitle title={article.title || ''} />
          <img
              alt="image"
              src={image}
              className="header-img img-responsive"
            />
          <ArticleBody body={article.body || ''} />
        </div>
        <div className="center-button">
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
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  continueEdit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Preview;
