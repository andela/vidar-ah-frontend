/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/display-name */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRequired = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
      {...rest}
      render={props => (isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
);


const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(() => mapStateToProps, {})(AuthRequired);
