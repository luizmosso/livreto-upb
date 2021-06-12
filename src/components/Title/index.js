import { FaceIcon } from '../Icons';
import { StyledTitle } from './styled';

export default function Title({ icon, children, color, ...props }) {
  return (
    <StyledTitle {...props} color={color}>
      {icon && icon === 'left' && (
        <FaceIcon color={color} size={40} style={{ marginRight: 8 }} />
      )}
      {children}
      {icon && icon === 'right' && (
        <FaceIcon color={color} size={40} style={{ marginRight: 8 }} />
      )}
    </StyledTitle>
  );
}
