import React from 'react';
import './contentHeader.scss';
import PropTypes from 'prop-types';

export default function ContentHeader(props) {
  const { textHeader } = props;
  return (
    <section className="content-header-test">
      <h2 className="content-header">{textHeader}</h2>
    </section>
  );
}

ContentHeader.propTypes = {
  textHeader: PropTypes.string.isRequired,
};
