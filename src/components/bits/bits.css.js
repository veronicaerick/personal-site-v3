import styled from 'styled-components';
import { accent } from '../../constants/theme';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.div`
  height: min-content;
  transition: 0.2s ease-in-out;
  padding: 6rem;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  background: accent ${MEDIA.TABLET`
    display: block;
    margin: 2rem 0;
  `};
  transition: 0.2s ease-in-out;
`;

export const Images = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.div`
  &:hover > .overlay {
    opacity: 1;
  }
  .overlay {
    background: rgba(167, 167, 222, 0.4);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: white;
    opacity: 0;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }

  .overlay-visible {
    background: rgba(167, 167, 222, 0.3);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: white;
    opacity: 0.5;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }

  .image {
    display: block;
  }

  img {
    border-radius: 5px;
  }
`;

export const ImageMeta = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: 'Karla';
  font-size: 2rem;
  padding: 1rem;
`;

export const Subtitle = styled.div`
  font-size: 1.75rem;
  color: #3352f4;
  padding: 0.5rem;
  display: flex;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .title {
    background-color: ${accent};
    padding: 1.5rem;
    line-height: 1.25;
    display: flex;
    align-items: flex-start;
    width: min-content;
  }

  .description {
    max-width: 80rem;
  }

  li {
    background: rgba(255, 218, 185, 0.55);
    padding: 10px;
    border-radius: 4px;
    width: max-content;
  }

  .span-3 {
    grid-column: span 3 / auto;
  }
`;
