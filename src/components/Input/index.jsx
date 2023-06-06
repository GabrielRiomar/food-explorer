import { Container } from './styles';

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      {Icon && <Icon size={24} />}
      <input {...rest} />
    </Container>
  );
}
