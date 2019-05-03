import React from 'react';
import './contentHeader.scss';
import PropTypes from 'prop-types';

export default function ContentHeader(props) {
  const { textHeader } = props;
  return (
    <section className="content-header-test">
      <h3 className="content-header">{textHeader}</h3>
    </section>
  );
}

ContentHeader.propTypes = {
  textHeader: PropTypes.string.isRequired,
};
