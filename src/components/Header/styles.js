import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  /* grid-area: header; */
  height: 13.68rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding: 2.8rem 12.3rem;
  margin: 0 auto;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  animation: fadeIn 0.5s;

  color: ${({ theme }) => theme.COLORS.WITHE_200};

  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3rem;

  > svg {
    animation: fade 5s infinite;
    width: 5rem;
    height: 5rem;
  }

  @keyframes fade {
    0% {
      opacity: 0.1;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.7;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const Search = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;

  padding: 0 6.4rem;
  border-radius: 0.8rem;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  > input {
    width: 100%;
    display: flex;
    height: 5.6rem;
    font-size: 1.6rem;

    /* padding: 1.9rem; */
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: none;
    /* text-align: center; */

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      padding: 1.6rem 1.4rem;
      font-size: 1.6rem;
    }
  }
  > svg {
    margin-left: 1.4rem;
  }
`
