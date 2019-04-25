import React, { useEffect } from 'react';
import {
  Container,
  CardDeck,
  CardColumns,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../../components/banner/Index';
import { getArticles, getTrendingArticles } from '../../redux/actions/getArticles';
import ArticleSummary from '../../components/articleSummary/Index';
import RectArticleSummary from '../../components/rectArticleSummary/Index';
import ContentHeader from '../../components/contentHeader/Index';
import './landingPage.scss';
import Footer from '../../components/footer/Index';


const LandingPage = (props) => {
  const { history, trendingArticles, articles } = props;
  useEffect(() => {
    props.getArticles(3).then();
    props.getTrendingArticles(6).then();
  }, {});


  const getMoreTrending = () => {
    const amount = props.trendingArticles.length + 6;
    props.getTrendingArticles(amount).then();
  };

  const getMoreArticles = () => {
    const amount = props.articles.length + 3;
    props.getArticles(amount).then();
  };

  const Search = () => (
    <Form>
      <Form.Group controlId="searchForm" className="search-pad">
        <Form.Control type="search" placeholder="Search" className="search-entry" />
      </Form.Group>
      <Form.Group controlId="filterForm">
        <Form.Label className="form-label">Filter by</Form.Label>
        <Form.Check inline label="Automobiles" type="checkbox" id="inline-checkbox-1" />
        <Form.Check inline label="Finance" type="checkbox" id="inline-checkbox-2" />
        <Form.Check inline label="General" type="checkbox" id="inline-checkbox-3" />
        <Form.Check inline label="Life-hacks" type="checkbox" id="inline-checkbox-4" />
        <Form.Check inline label="Medicine" type="checkbox" id="inline-checkbox-5" />
        <Form.Check inline label="Software development" type="checkbox" id="inline-checkbox-6" />
        <Form.Check inline label="Sports" type="checkbox" id="inline-checkbox-7" />
      </Form.Group>
    </Form>
  );


  return (
    <div className="test-div">
      <Banner history={history} />
      <Container>
        <Search />
      </Container>
      <Container>
        <Row>
          <Col className="trending" md={8}>
            <ContentHeader textHeader="All articles" />
            <CardColumns>
              {
                trendingArticles.map(data => (
                  <ArticleSummary
                    className="p-1"
                    key={data.id}
                    src={`${data.images[0]}`}
                    header={data.title}
                    url={`/articles/${data.slug}`}
                    name={data.name}
                    time={data.updatedAt} />
                ))
              }
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
              <div>
                {
                  articles.map(data => (
                    <RectArticleSummary
                      key={data.id}
                      header={data.title}
                      name={data.name}
                      time={data.updatedAt}
                      url={`/articles/${data.slug}`}
                    />
                  ))
                }
              </div>
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
};

LandingPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(() => mapStateToProps, mapDispatchToProps)(LandingPage);
