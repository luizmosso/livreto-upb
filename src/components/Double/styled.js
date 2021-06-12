import styled from 'styled-components';
import { styles } from '../../shared';
const { mx } = styles;

export const StyledDouble = styled.div`
  ${({ mx: mxValue }) => mx(mxValue)};
  display: flex;
`;
