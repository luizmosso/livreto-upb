import styled, { css } from 'styled-components';
import { styles, colors } from '../../shared';

const { mx } = styles;

export const StyledPicture = styled.div`
  ${({ mx: mxValue }) => mx(mxValue)};
  position: relative;
  width: fit-content;
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}

  ${({ skewRight }) =>
    skewRight &&
    css`
      transform: rotate(-2deg);
    `}

  ${({ skewLeft }) =>
    skewLeft &&
    css`
      transform: rotate(2deg);
    `}

    ${({ border }) =>
    border &&
    css`
      border: 6px solid white;
      box-shadow: ${border.position === 'left' ? '-' : ''}12px 12px 0px -4px ${colors[border.color]};
    `}
`;

export const Label = styled.p`
  width: 100%;
  text-align: ${({ corner }) => corner || 'left'};
  margin: 0;
`;
