/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Form, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const [interests, setInterests] = useState({
    Art: false, Photography: false, Music: false, Sport: false
  });
  const [input, setInput] = useState('');
  const [dropdown, showDropdown] = useState(false);

  const { updateInput } = props;

  const addInterest = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target.value === '') return;
      setInterests({ ...interests, [event.target.value]: false });
      setInput('');
    }
  };

  const updateState = () => {
    const getCheckedInterests = () => Object.entries(interests)
      .filter(item => item[1] === true)
      .map(item => item[0]);
    updateInput(getCheckedInterests());
  };

  useEffect(() => {
    updateState();
  }, [interests]);

  const checked = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.checked });
    updateState();
  };

  const updateInterest = (event) => {
    setInput(event.target.value);
  };

  const setDropdown = () => {
    showDropdown(true);
  };

  return (
    <>
      <Form.Control type="text" autoComplete="off" name="interests" value={input} placeholder="Type in and select your interests" className="dark-forms" onChange={updateInterest} onKeyPress={addInterest} onFocus={setDropdown} aria-controls="example-collapse-text" aria-expanded={dropdown}>
      </Form.Control>
      <Collapse in={dropdown}>
        <div id="example-collapse-text">
          {Object
            .entries(interests)
            .map(elem => (
              <label htmlFor={elem[0]} key={elem[0]} className="p-2">
                <input name={elem[0]} type="checkbox" onChange={checked} id={elem[0]} />
                {'  '}
                {elem[0]}
              </label>
            ))}
        </div>
      </Collapse>
    </>
  );
};

Checkbox.propTypes = {
  updateInput: PropTypes.func.isRequired,
};

export default Checkbox;
