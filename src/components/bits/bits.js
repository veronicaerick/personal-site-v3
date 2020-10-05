import React from 'react';
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
import grid from './images/grid.png';
import plants from './images/plants.png';
import icons from './images/icons.png';
import designSystem from './images/design-system.png';

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
                    <a href={image.href} target="_blank" rel="noreferrer">
                      <span className="image">{image.image}</span>
                      <div className="overlay"></div>
                      <div className="overlay-visible"></div>
                    </a>
                  </Image>
                </Images>

                <ImageMeta className="image-meta">
                  {image.title}
                  <Subtitle className="sub-title">{image.subTitle}</Subtitle>
                </ImageMeta>
              </React.Fragment>
            </div>
          ))}
        </ImageContainer>
      </div>
    </Grid>
  </Container>
);

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
    href: 'https://codepen.io/vee1234/full/OJNmypN',
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
    href: 'https://codepen.io/vee1234/full/QWNpxWL',
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
    href: 'https://codepen.io/vee1234/full/yLOvNYo',
  },
  {
    image: (
      <img
        src={designSystem}
        alt="design"
        key="design"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    title: 'Design System/Invision + Storybook',
    subTitle: 'medium article',
    href:
      'https://medium.com/@veronicaerick/using-storybook-invisions-design-system-manager-to-align-design-and-engineering-883727596e60',
  },
];
