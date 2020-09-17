import styled from 'styled-components';
import { accent } from '../../constants/theme';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.div`
  height: min-content;
  transition: 0.2s ease-in-out;
  padding: 10rem 8rem;
  display: grid;
  grid-column: span 2 / auto;
  grid-gap: 2rem;
`;
