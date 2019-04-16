import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import Loader from '../../components/loader/Index';
import { CURRENT_USER } from '../../redux/actions/actionTypes';
import store from '../../redux/store';

const SocialCallback = (props) => {
  useEffect(() => {
    const { location: { search } } = window;
    const token = search.replace('?token=', '');
    const decodedToken = jwt.decode(token);
    localStorage.setItem('user', JSON.stringify(decodedToken));
    localStorage.setItem('token', token);
    store.dispatch({
      type: CURRENT_USER,
      payload: {
        currentUser: decodedToken
      }
    });
    props.history.push('/');
  }, []);

  return <Loader className="loader-container" />;
};

SocialCallback.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(() => {}, {})(SocialCallback);
