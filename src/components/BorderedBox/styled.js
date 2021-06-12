import styled, { css } from 'styled-components';
import { styles, colors } from '../../shared';

const { mx } = styles;

export const StyledBorderedBox = styled.div`
  ${({ mx: mxValue }) => mx(mxValue)};
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color, title }) => css`
    border: 8px solid ${colors[color]};
    &::before {
      content: '${title}';
      background-color: white;
      color: ${colors[color]};
      position: absolute;
      top: -25px;
      font-size: 1.6rem;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
    }
  `}
`;
