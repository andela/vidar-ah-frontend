import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Errors = ({ errors }) => {
  if (errors) {
    return (
      <div className="floating-alert">
        {
          Object.keys(errors).map(error => (
            <Alert key={error} variant="danger">
              {errors[error]}
            </Alert>
          ))
        }
      </div>
    );
  }
  return null;
};

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

Errors.defaultProps = {
  errors: [],
};

export default Errors;
