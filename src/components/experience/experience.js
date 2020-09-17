import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../experience/experience.css';
import { Grid } from '../experience/experience.css';
import Icon from './Lrlogo';
import SectionTitle from 'components/section-title/title';

const Experience = () => (
  <Container>
    <Grid>
      <SectionTitle text="LiveRamp" icon={<Icon width={35} height={35} />} />

      <div className="span-2">
        <span className="header">UX Engineer/Design Systems Manager</span>
        <p className="description">
          I was hired as the first UX Engineer at LiveRamp in 2017 and I now
          work within our Application Experience team and help manage the Design
          System. Were responsible for building internal tooling that assists
          engineering with shipping consistent and quality products, with a
          specialization in unifying our disparate design and engineering
          assets.
        </p>

        <ul className="grid">
          <li>Design System Management</li>
          <li>Pattern Library Development</li>
          <li>UI Component Development</li>
          <li>Style Guide Consistency</li>
        </ul>
      </div>
    </Grid>
  </Container>
);

Experience.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Experience;
