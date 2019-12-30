import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Headline({ header, desc }) {
  if (!header) {
    return null;
  }

  return (
    <Container data-test="headline">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </Container>
  );
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};
