import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Articles from 'components/articles';
import Bits from 'components/bits';
import Box from 'components/box';
import Experience from 'components/experience';
import Fade from 'react-reveal/Fade';
import Gallery from 'components/gallery';
import Footer from 'components/footer';
import Hero from 'components/hero';
import IOExample from 'components/io-example';
import Resume from 'components/resume';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { Italic, IconWrap } from './index.css';
import Icon from './hero';

const Index = ({ data }) => (
  <Layout>
    <Hero>
      <Box>
        <Fade bottom>
          <Title as="h2" size="large">
            Im Veronica. I build User Interfaces with a{' '}
            <Italic>focus on</Italic> and <Italic>love for </Italic>
            design systems{' '}
            <IconWrap>
              <Icon className="icon" width={45} height={45} />
            </IconWrap>
          </Title>
        </Fade>
      </Box>
    </Hero>
    <Fade bottom>
      <Experience />
    </Fade>

    <Fade bottom>
      <Gallery />
    </Fade>

    <Fade bottom>
      <Bits />
    </Fade>

    <Fade bottom>
      <Resume />
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
