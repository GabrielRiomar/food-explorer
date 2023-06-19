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
    /* margin-right: 0.8rem; */
    height: 3rem;
    width: 5rem;
  }

  :hover {
    animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`
