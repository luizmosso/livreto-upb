import styled, { css } from 'styled-components';
import { styles } from '../../shared';

const { mx } = styles;

export const StyledPlainText = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: justify;
  ${({ mx: mxValue }) => mx(mxValue)};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;
