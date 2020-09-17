import styled from 'styled-components';
import { mainText, background, deepPurp } from '../../constants/theme';

export const Container = styled.button`
  padding: 1rem;
  color: ${deepPurp};
  font-family: 'Karla', serif;
  font-size: 1.75rem;
  border-width: 0px;
  font-weight: 600;
  background: white;
  transition: 0.2s ease-in-out;
  border-radius: 4px;
  &:hover {
    color: ${mainText};
    background: ${deepPurp};
  }
`;
