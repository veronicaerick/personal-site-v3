import styled from 'styled-components';
import { mainText } from 'constants/theme';

export const Container = styled.div`
  height: 80vh;
  padding: 4rem 0;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 250px;
  grid-template-rows: 100px 1fr;
  line-height: 1.25;
  font-family: Karla;
  font-size: 2rem;
`;
