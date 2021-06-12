import styled, { css } from 'styled-components';
import { colors, styles } from '../../shared';

const { mx } = styles;

export const StyledTitle = styled.h2`
  width: 100%;
  font-weight: normal;
  font-size: 1.7rem;
  display: flex;
  height: 60px;
  align-items: center;
  margin-top: 5px;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'center')};
  -webkit-print-color-adjust: exact;
  ${({ mx: mxValue }) => mx(mxValue)};
  ${({ color, background }) =>
    color &&
    css`
      color: ${colors[color]};
      background-color: ${background ? colors[background] : 'transparent'};
    `}
`;
