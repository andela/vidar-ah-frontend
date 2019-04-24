/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';
import './formContainer.scss';

const FormContainer = (props) => {
  const {
    formData, handleSubmit, cancelChanges, handleChange, renderErrors, errors,
  } = props;

  return (
    <div className="form-container">
      <h2 className="welcome">
        Welcome
        {' '}
        {formData.firstname}
      </h2>
      <h4>Personal Info</h4>
      <hr className="hr" />
      <div className="panel panel-default">
        {renderErrors(errors)}
      </div>
      <Form className="form" onSubmit={handleSubmit}>
        <Row className="name-field">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="name">Firstname</Form.Label>
              <Form.Control
                type="text"
                className="input"
                name="firstname"
                autoFocus
                value={formData.firstname || ''}
                onChange={event => handleChange(event)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="name">Lastname</Form.Label>
              <Form.Control
                type="text"
                className="input"
                name="lastname"
                value={formData.lastname || ''}
                onChange={event => handleChange(event)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="name-field">
          <Form.Group>
            <Form.Label className="name">Bio</Form.Label>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              name="bio"
              cols="80"
              rows="7"
              className="input"
              value={formData.bio || ''}
              onChange={event => handleChange(event)} />
          </Form.Group>
        </div>
        <h4>Actions</h4>
        <hr className="hr" />
        <div className="align-btn" id="action-btn">
          <Button type="submit" className="avatar-btn">Save Profile</Button>
          <Button onClick={cancelChanges} type="button" className="avatar-btn">Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormContainer;
