import styled from 'styled-components';
import { mainText } from '../../constants/theme';

export const Container = styled.div`
  height: min-content;
  transition: 0.2s ease-in-out;
  padding: 10rem 8rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .header {
    font-size: 2rem;
    font-weight: 500;
  }

  .description {
    max-width: 80rem;
    margin: 1rem 0;
    line-height: 1.2;
  }

  li {
    background: rgba(255, 218, 185, 0.55);
    padding: 10px;
    border-radius: 4px;
    width: max-content;
  }

  .span-2 {
    grid-column: span 2 / auto;
    grid-gap: 2rem;
    color: ${mainText};
  }
`;
