import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { deleteArticle } from '../../redux/actions/articles';
import Loader from '../loader/Index';

import './modal.scss';

const DeleteModal = (props) => {
  const {
    article, displayModal, closeModal, history
  } = props;

  const [state, setState] = useState({
    loading: false,
    errors: [],
    successMessage: ''
  });

  const { errors, successMessage, loading } = state;

  const handleDeleteArticle = async () => {
    setState({ ...state, errors: [], loading: true });
    const response = await props.deleteArticle(article);
    const { success, errors: arrayOfErrors } = response;
    if (arrayOfErrors) {
      setState({ ...state, errors: arrayOfErrors, loading: false });
    }
    if (success) {
      (history.push('/'));
    }
  };

  const renderErrors = arrayOfErrors => arrayOfErrors.map(error => (
    <Alert className="errorMsg" key={error} variant="danger">{error}</Alert>
  ));

  const renderSuccess = message => (message ? <Alert variant="success">{message}</Alert> : null);
  return (
    <Fragment>
      {loading && <Loader />}
      <Modal
      isOpen={displayModal}
      contentLabel="Modal Option"
      ariaHideApp={false}
      className="Modal"
      overlayClassName="Overlay"
    >
        {renderErrors(errors)}
        {renderSuccess(successMessage)}
        <p className="p-tag">Are you sure you want to delete this article?</p>
        <div className="container-modal-content">
          <button className="btn-modal cancel" onClick={closeModal}>Cancel</button>
          <button className="btn-modal proceed" onClick={handleDeleteArticle}>Proceed</button>
        </div>
      </Modal>
    </Fragment>
  );
};

DeleteModal.propTypes = {
  article: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  displayModal: PropTypes.bool,
  history: PropTypes.object,
};

DeleteModal.defaultProps = {
  history: {},
  displayModal: false,
};

const mapStateToProps = state => ({
  article: state.articleReducer.article.article,
});

export default connect(() => mapStateToProps, { deleteArticle })(withRouter(DeleteModal));
