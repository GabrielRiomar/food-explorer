import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border: none;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  > svg {
    height: 3rem;
    width: 5rem;
  }
`
