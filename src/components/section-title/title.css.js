import styled from 'styled-components';
import { accent, mainText, deepPurp } from 'constants/theme';

export const Container = styled.div`
  background-color: ${accent};
  padding: 0.75rem;
  width: fit-content;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  background-color: ${({ isVisible }) => (isVisible ? deepPurp : '#DFA4B1')};

  div {
    transition: background-color 0.2s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &:after {
      height: 16px;
      right: 56px;
      position: relative;
      -webkit-transition: all 0.15s ease-in-out;
      transition: all 0.15s ease-in-out;
      width: 100%;
      border: 2px solid #a4a6e1;
      z-index: -1;
      opacity: 0.5;
      background: #a4a6e1;
      width: auto;
    }
    svg {
      transform: rotate(20degree);
    }
  }

  span {
    padding: 0 0.25rem;
    font-family: 'Karla';
    font-size: 2.55rem;
    color: ${({ isVisible }) => (isVisible ? 'white' : mainText)};
  }
`;
