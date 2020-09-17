import React from 'react';
import IO from 'components/io';
import { Container } from './title.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const SectionTitle = ({ icon, text }) => (
  <IO rootMargin="-200px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <div>
          <span>{text}</span>
          <span>{icon}</span>
        </div>
      </Container>
    )}
  </IO>
);

export default SectionTitle;
