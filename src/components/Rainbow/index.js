import { StyledRainbow, Lane } from './styled';

export default function Rainbow({ big, small, ...props }) {
  return (
    <StyledRainbow big={big} small={small} {...props}>
      <Lane color="blue" big={big} small={small} />
      <Lane color="pink" big={big} small={small} />
      <Lane color="green" big={big} small={small} />
    </StyledRainbow>
  );
}
