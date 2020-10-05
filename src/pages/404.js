import React from 'react';
import Layout from 'components/layout';
import { Container } from '../page-style/404.css';
import Cactus from '../page-style/images/404.js';

const NotFound = () => (
  <Layout>
    <Container>
      Ooops - nothin to see here! <Cactus width="300px" height="300px" />
    </Container>
  </Layout>
);

export default NotFound;
