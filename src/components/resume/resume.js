import React from 'react';
import { Container } from './resume.css';
import { Grid } from './resume.css';
import SectionTitle from 'components/section-title/title';

const Resume = () => (
  <Container>
    <Grid>
      <SectionTitle text="Tools/Skills" />

      <div className="span-2">
        <ul className="grid">
          <li>
            React{' '}
            <img
              src="https://cdn.svgporn.com/logos/react.svg"
              width="24px"
              height="24px"
              alt="sass"
            />
          </li>
          <li>
            HTML{' '}
            <img
              src="https://cdn.svgporn.com/logos/html-5.svg"
              width="24px"
              height="24px"
              alt="sass"
            />
          </li>
          <li>
            CSS{' '}
            <img
              src="https://cdn.svgporn.com/logos/css-3.svg"
              width="24px"
              height="24px"
              alt="sass"
            />
          </li>
          <li>
            Sass{' '}
            <img
              src="https://cdn.svgporn.com/logos/sass.svg"
              width="24px"
              height="24px"
              alt="sass"
            />
          </li>
          <li>
            Gatsby{' '}
            <img
              src="https://cdn.svgporn.com/logos/gatsby.svg"
              width="24px"
              height="24px"
              alt="sass"
            />
          </li>
          <li>
            Sketch{' '}
            <img
              src="https://cdn.svgporn.com/logos/sketch.svg"
              width="24px"
              height="24px"
              alt="sketch"
            />
          </li>
          <li>
            InVision{' '}
            <img
              src="https://cdn.svgporn.com/logos/invision.svg"
              width="24px"
              height="24px"
              alt="sketch"
            />
          </li>
          <li>
            Figma{' '}
            <img
              src="https://cdn.svgporn.com/logos/figma.svg"
              width="24px"
              height="24px"
              alt="sketch"
            />
          </li>
          <li>
            Storybook{' '}
            <img
              src="https://cdn.svgporn.com/logos/storybook-icon.svg"
              width="24px"
              height="24px"
              alt="sketch"
            />
          </li>
          <li>
            Material UI{' '}
            <img
              src="https://cdn.svgporn.com/logos/material-ui.svg"
              width="24px"
              height="24px"
              alt="sketch"
            />
          </li>
        </ul>
      </div>
    </Grid>
  </Container>
);

export default Resume;
