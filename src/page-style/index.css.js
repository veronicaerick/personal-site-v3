import styled from 'styled-components';
import MEDIA from '../helpers/mediaTemplates';

export const Italic = styled.span`
  font-style: italic;
  font-weight: 600;
`;

export const IconWrap = styled.span`
  svg {
    position: relative;
    top: 5px;
    width: 40px ${MEDIA.TABLET`
    width: 28px;
    height: 28px;
  `};
`;
