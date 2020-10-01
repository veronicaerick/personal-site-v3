import styled from 'styled-components';
import { accent, mainText, background } from '../../constants/theme';
import MEDIA from '../../helpers/mediaTemplates';

export const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Bitter', serif;
  color: ${mainText};
`;

export const Text = styled.div`
  font-size: 1.75rem;
  font-family: 'Karla', sans-serif;
  color: ${mainText};
  padding-bottom: 1.5rem;
`;

export const DialogImages = styled.div`
  img {
    max-width: 100%;
    height: 'auto';
    margin: 2rem 0;
    box-shadow: 0px 0px 6px 0px #9e9e9e8c;
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${background};
  padding: 4rem 2rem 2rem 2rem;
`;

export const Container = styled.div`
  height: min-content;
  transition: 0.2s ease-in-out;
  padding: 14rem 8rem ${MEDIA.TABLET`
  padding: 3rem 2rem;

`};
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
  margin-top: 2rem;
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
    background: rgba(71, 71, 216, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: white;
    opacity: 0.5;
    transition: opacity 0.5s;
    border-radius: 5px;
    cursor: pointer;
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
  padding: 0.5rem 0;
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

export const Badge = styled.a`
  font-size: 1.75rem;
  color: white;
  background: rgba(55, 82, 244, 0.85);
  padding: 1rem;
  border-radius: 5px;
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: min-content min-content;
  align-items: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    background: rgba(55, 82, 244, 0.9);
  }
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  padding: 1rem 0;
  grid-template-columns: min-content min-content min-content;
  margin: 1rem 0;
`;
