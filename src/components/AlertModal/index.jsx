import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const AlertModal = (props) => {
  const { show, message, variant, closeAlertModal } = props;

  return (
    <div className="d-flex justify-content-center">
      { show ? (
        <Alert className="alert-test alert-style" dismissible variant={variant} onClose={closeAlertModal}>
          {message}
        </Alert>
      ) : null }
    </div>
  );
};


AlertModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeAlertModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default AlertModal;
