import styled, { css } from 'styled-components';
import { colors } from '../../shared';

export const StyledRainbow = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 12px);
  margin-left: 4px;
  justify-content: space-between;
  ${({ fromLeft }) => css`
    transform: skew(${fromLeft ? '' : '-'}9deg)
      rotate(${fromLeft ? '' : '-'}9deg);
  `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
  ${({ big }) => {
    const lane = big ? 42 : 20;
    const space = big ? 3 : 1;
    return css`
      height: ${(lane + space) * 3}px;
    `;
  }}
`;

export const Lane = styled.div`
  ${({ big }) =>
    css`
      height: ${big ? 42 : 20}px;
    `}
  background: ${({ color }) => colors[color]};
  -webkit-print-color-adjust: exact;
`;
