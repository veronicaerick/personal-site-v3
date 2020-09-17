import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './articles.css';

const Articles = () => (
  <Container>
    <div>Article one</div>
    <div>Article two</div>
    <div>Article three</div>
    <div>Article four</div>
  </Container>
);

Articles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Articles;
