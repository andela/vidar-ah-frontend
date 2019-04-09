import React from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import ArticleTitle from '../../components/articleTitle/ArticleTitle';
import ArticleBody from '../../components/articleBody/ArticleBody';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import ArticleSummary from '../../components/articleSummary/ArticleSummary';

const loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eget magna fermentum iaculis eu non. Neque sodales ut etiam sit amet nisl. At consectetur lorem donec massa sapien faucibus et molestie. Felis bibendum ut tristique et. Est ante in nibh mauris cursus mattis molestie. Mollis nunc sed id semper risus in hendrerit gravida. Maecenas ultricies mi eget mauris pharetra et ultrices. At tellus at urna condimentum mattis pellentesque id nibh. Senectus et netus et malesuada fames ac turpis egestas maecenas. Suscipit tellus mauris a diam maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum. Integer eget aliquet nibh praesent tristique magna. Felis imperdiet proin fermentum leo. Metus aliquam eleifend mi in nulla posuere sollicitudin. Dolor sit amet consectetur adipiscing elit. Amet est placerat in egestas. Tincidunt vitae semper quis lectus nulla at volutpat diam. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Porttitor eget dolor morbi non arcu risus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Velit scelerisque in dictum non consectetur a erat nam. Dolor purus non enim praesent elementum facilisis. Integer eget aliquet nibh praesent tristique magna sit. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Rutrum quisque non tellus orci ac auctor augue mauris augue. Et netus et malesuada fames ac turpis egestas sed tempus. Integer malesuada nunc vel risus commodo viverra. At lectus urna duis convallis convallis tellus id interdum velit. Integer feugiat scelerisque varius morbi enim nunc. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Gravida neque convallis a cras semper. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Maecenas pharetra convallis posuere morbi leo urna molestie at. Habitant morbi tristique senectus et netus. Integer malesuada nunc vel risus commodo viverra maecenas. Mattis molestie a iaculis at erat pellentesque adipiscing. Eu facilisis sed odio morbi quis commodo. Justo eget magna fermentum iaculis eu. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Sed arcu non odio euismod lacinia. Orci sagittis eu volutpat odio facilisis. Sed blandit libero volutpat sed cras ornare arcu dui. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sed vulputate mi sit amet mauris commodo quis. In nisl nisi scelerisque eu ultrices. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum';

const Login = ({ history }) => (
  <>
    <div>
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <ArticleTitle text="I am a boy and I love it" />
        <ImageContainer size="843*250" src="https://via.placeholder.com/700x400" />
        <ArticleBody text={loren} />
      </Container>
      <Container>
        <Row>
          <ArticleSummary src="https://via.placeholder.com/700x400" header="This is header text" text="This is body text" />
        </Row>
      </Container>
    </div>
  </>
);

Login.propTypes = {
  history: PropTypes.string.isRequired
};
export default Login;
