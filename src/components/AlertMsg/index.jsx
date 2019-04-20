import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import './alert.scss';

const AlertMsg = (props) => {
  const { message, variant = 'success' } = props;
  const [state, setState] = useState({
    show: true,
  });

  function dismissAlertMsg() {
    setState({ ...state, show: false });
  }

  const { show } = state;

  return (
    <Fragment>
      {
        show && (
          <Alert dismissible variant={variant} onClick={dismissAlertMsg}>
            <span>{message}</span>
          </Alert>
        )
      }

    </Fragment>
  );
};

AlertMsg.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default AlertMsg;
