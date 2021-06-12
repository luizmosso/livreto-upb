import styled, { css } from 'styled-components';

export const StyledSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  ${({ centered }) =>
    centered &&
    css`
      align-items: center;
    `}
`;
