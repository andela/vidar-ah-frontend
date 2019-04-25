import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { reportArticle } from '../../redux/actions/reports';

const ReportModal = (props) => {
  const { visible, closeModal, articleSlug } = props;
  const [reportData, setReportData] = useState({
    type: null,
    message: null
  });
  const [state, setState] = useState({
    errors: [],
    successMessage: null,
    loading: false
  });

  const { errors, successMessage, loading } = state;

  const updateInput = (event) => {
    const { target: { name, value } } = event;
    return setReportData({ ...reportData, [name]: value });
  };

  const renderErrors = () => errors.map(error => (
    <Alert key={error} variant="danger">{error}</Alert>
  ));

  const renderSuccess = () => successMessage && <Alert variant="success">{successMessage}</Alert>;

  const submitForm = async (event) => {
    event.preventDefault();
    setState({ successMessage: null, errors: [], loading: true });
    const {
      success,
      message,
      errors: errorsArray,
      error
    } = await props.reportArticle(reportData, articleSlug);
    setState({ ...state, loading: false });
    if (!success) {
      return setState({ ...state, errors: errorsArray || [error] });
    }
    setState({ ...state, successMessage: message });
  };

  return (
    <div className="report">
      <Modal dialogClassName="alert-width" show={visible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Report article</Modal.Title>
        </Modal.Header>
        {renderErrors()}
        {renderSuccess()}
        <Modal.Body>
          Why do you want to report this article?
          <br />
          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Harrassment"
                name="type"
                onChange={updateInput}
                value="Harrassmant"
              />
              <Form.Check
                type="radio"
                label="Spam"
                name="type"
                onChange={updateInput}
                value="Spam"
              />
              <Form.Check
                type="radio"
                label="Plagiarism"
                name="type"
                value="Plagiarism"
                onChange={updateInput}
              />
            </Col>
          </Form.Group>
          <Form.Text className="text-muted">
            Additional Information
          </Form.Text>
          <Form.Control
            type="text"
            name="message"
            placeholder="Tell us more (optional)"
            onChange={updateInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {
            !successMessage ? (
              <Button variant="primary" onClick={submitForm}>
                {
                  loading ? (
                    <Spinner animation="border" role="status" />
                  ) : 'Submit'
                }
              </Button>
            ) : <div />
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ReportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  articleSlug: PropTypes.string.isRequired,
  reportArticle: PropTypes.func.isRequired
};

export default connect(() => ({}), { reportArticle })(ReportModal);
