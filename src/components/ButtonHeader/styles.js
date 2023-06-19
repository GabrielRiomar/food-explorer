import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  width: 100%;
  max-width: 21.6rem;
  height: 5.6rem;

  border-radius: 0.5rem;

  padding: 1.6rem 4.65rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  > svg {
    width: 2.6rem;
    height: 2.2rem;
  }

  @media (min-width: 768px) {
    max-width: 21.6rem;
  }
`
