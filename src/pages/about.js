import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import headshot from '../page-style/images/headshot.png';
import { Container } from '../page-style/about/about.css';

const About = ({ data }) => (
  <Layout>
    <Box style={{ padding: '6rem' }}>
      <img src={headshot} alt="headshot" width="300px" />
      <Container>
        <p>
          Hi, i&apos;m Veronica. I&apos;m an SF native, lover of design and UX
          and am always open to chatting about new/different opportunities (or
          dogs or beer{' '}
          <span role="img" aria-label="smile">
            🙃
          </span>
          ). I&apos;ve been circling around the Bay Area for my whole life; SF
          for childhood, wine country pre college and UC Berkeley for undergrad{' '}
          <span className="em">go Bears</span>{' '}
          <span role="img" aria-label="bear">
            🐻
          </span>
          - , and more recently back in SF working in tech for the last five-ish
          years. I am passionate about mental health advocacy, rescuing dogs,
          and good beer to name a few. If you&apos;d like to see more work,
          please email me (I have more samples of varying focuses stashed
          locally).
        </p>
        <br></br>
        <p>
          This site was built with React, Gatsby, styled-components and alot of
          linear-gradients (they&apos;re still cool).
        </p>
      </Container>
    </Box>
  </Layout>
);

export default About;
