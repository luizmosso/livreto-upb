import { StyledPicture, Label } from './styled';
import { pictures } from '../../shared';

export default function Picture({ name, label, ...props }) {
  const { position, text, corner } = label || {};
  return (
    <StyledPicture {...props}>
      {position === 'top' && <Label corner={corner}>{text}</Label>}
      <img src={pictures[name]} alt="pic" />
      {position !== 'top' && <Label corner={corner}>{text}</Label>}
    </StyledPicture>
  );
}
