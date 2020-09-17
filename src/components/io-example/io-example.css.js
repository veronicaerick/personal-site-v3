import styled from 'styled-components';
import { accent, main } from 'constants/theme';

export const Root = styled.div`
  background-color: ${accent};
  width: 100%;
  height: 40vh;
  background-color: ${main};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 4rem;
  width: 50vw;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #333')};
`;
