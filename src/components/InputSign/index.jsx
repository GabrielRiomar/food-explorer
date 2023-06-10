import { Container } from './styles';

export function InputSign({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      {Icon && <Icon size={24} />}
      <input {...rest} />
    </Container>
  );
}
