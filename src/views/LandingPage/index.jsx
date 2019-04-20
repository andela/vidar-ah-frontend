import React, { useEffect, useState } from 'react';
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
import Banner from '../../components/Banner';
import { getArticles, getTrendingArticles, searchArticles } from '../../redux/actions/getArticles';
import ArticleSummary from '../../components/ArticleSummary';
import RectArticleSummary from '../../components/RectArticleSummary';
import ContentHeader from '../../components/ContentHeader';
import './landingPage.scss';
import Footer from '../../components/Footer';
import DefaultButton from '../../components/Button';
// import Footer from '../../components/footer/Index';
// import DefaultButton from '../../components/button/Index';
import AlertMsg from '../../components/AlertMsg';


const LandingPage = (props) => {
  const [searchItems, setSearchItems] = useState({
    title: '',
    author: '',
    limit: 6,
    offset: 0
  });
  const [searchResults, setSearchResults] = useState({
    articlesCount: 0,
    articles: [],
    searchRequest: false
  });

  const { history, articles, trendingArticles, successMessage } = props;
  useEffect(() => {
    props.getArticles(3).then();
    props.getTrendingArticles(6).then();
  }, {});

  const getMoreTrending = () => {
    const amount = props.trendingArticles.length + 6;
    props.getTrendingArticles(amount).then();
  };

  const getMoreSearchResults = async () => {
    const limit = searchItems.limit + 6;
    setSearchItems({ ...searchItems, limit });
    const query = `offset=${searchItems.offset}&limit=${limit}&term=${searchItems.title}&author=${searchItems.author}`;
    const response = await props.searchArticles(query);
    if (response.success) {
      setSearchResults({
        ...searchResults,
        articlesCount: response.results.count,
        articles: response.results.rows,
        searchRequest: true
      });
    }
  };

  const getMoreArticles = () => {
    const amount = props.articles.length + 3;
    props.getArticles(amount).then();
  };


  const updateTitle = (event) => {
    setSearchItems({ ...searchItems, title: event.target.value });
  };

  const updateAuthor = (event) => {
    setSearchItems({ ...searchItems, author: event.target.value });
  };

  const completeRequest = async (event) => {
    event.preventDefault();
    const query = `offset=${searchItems.offset}&limit=${searchItems.limit}&term=${searchItems.title}&author=${searchItems.author}`;
    const response = await props.searchArticles(query);
    if (response.success) {
      setSearchResults({
        ...searchResults,
        articlesCount: response.results.count,
        articles: response.results.rows,
        searchRequest: true
      });
    }
  };
  return (
    <div className="test-div">
      <Banner history={history} />
      <Container>
        <Form className="search-pad">
          <Form.Row>
            <Col md="6">
              <Form.Control
                type="search"
                className="search-entry search-test"
                placeholder="Title or description"
                onChange={updateTitle} />
            </Col>
            <Col md="4">
              <Form.Control
                type="text"
                placeholder="Author"
                className="author-test"
                onChange={updateAuthor}
              />
            </Col>
            <Col md="auto">
              <DefaultButton
                text="Search"
                className="yellow-button-search"
                onClick={completeRequest} />
            </Col>
          </Form.Row>
        </Form>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {(successMessage.length > 1) && <AlertMsg message={successMessage} />}
          </Col>
        </Row>
        <Row>
          <Col className="trending" md={8}>
            {
              searchResults.searchRequest ? <ContentHeader textHeader={`Search results (${searchResults.articlesCount})`} /> : <ContentHeader textHeader="All articles" />
            }
            <CardColumns>
              {
                searchResults.searchRequest ? searchResults.articles.map(data => (
                  <ArticleSummary
                    className="p-1"
                    key={data.id}
                    src={`${data.images[0]}`}
                    header={data.title}
                    url={`/articles/${data.slug}`}
                    name={data.name}
                    time={data.updatedAt} />
                )) : trendingArticles.map(data => (
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
              {
                searchResults.searchRequest
                  && (searchResults.articlesCount > 6)
                  && ((searchResults.articles.length % 6) === 0) ? (
                    <Button
                      onClick={() => getMoreSearchResults()}
                      className="readMore"
                      variant="outline-secondary"
                      size="lg" block>
                      <h4>See more search results</h4>
                    </Button>
                  ) : null
              }
              {
                !searchResults.searchRequest ? (
                  <Button
                    onClick={() => getMoreTrending()}
                    className="readMore"
                    variant="outline-secondary"
                    size="lg" block>
                    <h4>See more trending articles</h4>
                  </Button>
                ) : null
              }

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
                onClick={() => getMoreArticles()}
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
  trendingArticles: state.articles.trendingArticles,
  successMessage: state.articles.successMessage
});

const mapDispatchToProps = {
  getArticles,
  getTrendingArticles,
  searchArticles
};

LandingPage.propTypes = {
  trendingArticles: PropTypes.array.isRequired,
  getTrendingArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
  searchArticles: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
};

LandingPage.propTypes = {
  history: PropTypes.instanceOf(Object)
};

LandingPage.defaultProps = {
  history: {},
  successMessage: '',
};

export default connect(() => mapStateToProps, mapDispatchToProps)(LandingPage);
