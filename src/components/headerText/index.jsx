import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export default function HeaderText(props) {
  const { textHeader, textBody } = props;
  return (
    <section>
      <h2 className="header">{textHeader}</h2>
      <p className="body">{textBody}</p>
    </section>
  );
}

HeaderText.propTypes = {
  textHeader: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};
