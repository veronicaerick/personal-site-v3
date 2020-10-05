import styled from 'styled-components';
import { mainText } from 'constants/theme';

export const Container = styled.div`
  height: auto;
  padding: 4rem 0;
  p {
    line-height: 1.25;
    font-family: Karla;
    font-size: 1.75rem;
  }
  .em {
    font-style: italic;
    color: ${mainText};
  }
`;
