/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/display-name */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRequired = ({ component: Component, isLoggedIn, role, adminRequred, ...rest }) => {
  if (adminRequred && role !== 'superadmin') {
    return <Redirect to="/404" />;
  }
  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
  );
};


const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  role: state.authReducer.currentUser.role
});

export default connect(() => mapStateToProps, {})(AuthRequired);
