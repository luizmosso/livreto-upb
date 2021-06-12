import styled, { css } from 'styled-components';
import { styles, colors } from '../../shared';

const { mx } = styles;

export const StyledColoredBox = styled.div`
  background-color: ${({ color }) => colors[color]};
  -webkit-print-color-adjust: exact;
  ${({ mx: mxValue }) => mx(mxValue)};
  color: white;
  font-size: 0.8rem;
  padding: 0.8rem;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;
