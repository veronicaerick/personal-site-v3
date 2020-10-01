import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import { Container } from './404.css';
import Cactus from './images/404.js';

const NotFound = () => (
  <Layout>
    <Container>
      Ooops - nothin to see here! <Cactus width="300px" height="300px" />
    </Container>
  </Layout>
);

export default NotFound;
