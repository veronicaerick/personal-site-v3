import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { mainText } from 'constants/theme';

export const Text = styled.span`
  display: block;
  color: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return mainText;
      default:
        return 'white';
    }
  }};
  font-family: 'Bitter', serif;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.5rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
