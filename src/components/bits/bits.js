import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  ImageContainer,
  Image,
  Images,
  ImageMeta,
  Subtitle,
} from '../bits/bits.css';
import SectionTitle from 'components/section-title/title';
import Icon from './science';
import Pencil from './pencil';
import grid from './grid.png';
import plants from './plants.png';
import icons from './icons.png';
const Bits = () => (
  <Container>
    <Grid>
      <SectionTitle text="Experiments" />
      <div className="span-3">
        <ImageContainer>
          {images.map((image, i) => (
            <div key={i}>
              <React.Fragment>
                <Images>
                  <Image>
                    <span className="image">{image.image}</span>
                    <div className="overlay"></div>
                    <div className="overlay-visible"></div>
                  </Image>
                </Images>

                <ImageMeta className="image-meta">
                  {image.title}
                  <Subtitle className="sub-title">
                    {/* <Pencil width={18} height={18} /> */}
                    {image.subTitle}
                  </Subtitle>
                </ImageMeta>
              </React.Fragment>
            </div>
          ))}
        </ImageContainer>
      </div>
    </Grid>
  </Container>
);

Bits.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bits;

const images = [
  {
    image: (
      <img
        src={grid}
        alt="grid-2"
        key="grid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Gradient Grid Experiment',
    subTitle: 'codepen playground',
  },
  {
    image: (
      <img
        src={plants}
        alt="plants"
        key="plants"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Grid Experiment with Plants',
    subTitle: 'codepen playground',
  },
  {
    image: (
      <img
        src={icons}
        alt="icons"
        key="icons"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Icon Filter Background',
    subTitle: 'codepen playground',
  },
  {
    image: (
      <img
        src={icons}
        alt="icons"
        key="icons"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Icon Filter Background',
    subTitle: 'codepen playground',
  },
];
