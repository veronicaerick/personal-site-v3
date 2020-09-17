import styled from 'styled-components';
import { mainText } from 'constants/theme';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 8rem;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      padding: 0 2rem;
      & + li {
        margin-left: 2rem;
      }
    }
    a {
      text-decoration: none;
      color: ${mainText};
      font-size: 14px
      transition: 0.2s ease-in-out;
      &:hover {
        filter: brighten(0.6);
        color: #5853d8;
      }
    }
  }
`;
