/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  Container,
  CardDeck,
  CardColumns,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../../components/banner/Index';
import { getArticles, getTrendingArticles } from '../../redux/actions/getArticles';
import ArticleSummary from '../../components/articleSummary/ArticleSummary';
import RectArticleSummary from '../../components/rectArticleSummary';
import ContentHeader from '../../components/contentHeader';
import Footer from '../../components/footer/Footer';
import './index.scss';


const LandingPage = (props) => {
  useEffect(() => {
    props.getArticles(3).then();
  }, {});

  useEffect(() => {
    props.getTrendingArticles(6).then();
  }, {});

  const ArticleSummaryStack = () => props.trendingArticles.map(data => (
    <Link key={data.id} to={`/articles/${data.slug}`}>
      <div>
        <ArticleSummary src={`${data.images[0]}`} header={data.title} text={data.body} name={data.name} time={data.updatedAt} />
      </div>
    </Link>
  ));

  const RectArticleSummaryStack = () => props.articles.map(data => (
    <Link key={data.id} to={`/articles/${data.slug}`}>
      <div>
        <RectArticleSummary
          header={data.title}
          text={data.body}
          name={data.name}
          time={data.updatedAt}
        />
      </div>
    </Link>
  ));

  const getMoreTrending = () => {
    const amount = props.trendingArticles.length + 6;
    props.getTrendingArticles(amount).then();
  };

  const getMoreArticles = () => {
    const amount = props.articles.length + 3;
    props.getArticles(amount).then();
  };

  return (
    <div>
      <Banner history={props.history} />
      <Container>
        <Row>
          <Col className="trending" md={8}>
            <ContentHeader textHeader="Trending this week" />
            <CardColumns>
              <ArticleSummaryStack />
            </CardColumns>
            <div>
              <Button
                onClick={() => getMoreTrending()} // eslint-disable-line react/jsx-no-bind
                className="readMore"
                variant="outline-secondary"
                size="lg" block>
                <h4>See more trending articles</h4>
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <ContentHeader textHeader="Recent articles" />
            <CardDeck>
              <RectArticleSummaryStack />
            </CardDeck>
            <div>
              <Button
                className="btn"
                variant="outline-secondary"
                size="lg"
                block
                onClick={() => getMoreArticles()} // eslint-disable-line react/jsx-no-bind
              >
                <h4>See more recent articles </h4>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  trendingArticles: state.articles.trendingArticles
});

const mapDispatchToProps = {
  getArticles,
  getTrendingArticles
};

LandingPage.propTypes = {
  trendingArticles: PropTypes.array.isRequired,
  getTrendingArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(() => mapStateToProps, mapDispatchToProps)(LandingPage);
