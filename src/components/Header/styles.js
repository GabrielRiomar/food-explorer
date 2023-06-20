import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: 'header';
  height: 13.68rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 999;

  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  width: 121.2rem;
  height: 10.4rem;

  padding: 0 4rem;
  gap: 3.2rem;

  .nav-menu {
    display: flex;
    justify-content: space-between;

    width: 100%;
    gap: 3.2rem;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;

    width: 2.5rem;
    height: 0.3rem;
    margin: 0.5rem auto;

    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.LOGO_COLOR};
  }

  .nav-menu {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;

    .nav-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      position: fixed;
      left: -100%;
      top: 10.4rem;
      z-index: 9999;

      width: 100%;
      height: 35rem;
      gap: 2rem;
      padding: 5rem 5rem 3rem;
      border-radius: 0 0 2rem 2rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

      transition: 0.3s;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  @media only screen and (min-width: 769px) {
    .nav-menu-mobile {
      display: none;
    }

    .nav-menu-desktop {
      display: flex;
    }
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  animation: fadeIn 0.5s;

  font-size: 2.4rem;
  font-weight: 700;

  > img {
    width: 30rem;
    height: 7rem;
    transition: filter 0.3s ease-in-out;
  }

  .logo img:hover {
    filter: brightness(2);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1.2);
    }
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

export const Search = styled.div`
  width: 100%;
  align-items: center;

  padding: 0 6.4rem;
  border-radius: 0.8rem;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  > input {
    width: 100%;
    display: flex;
    align-items: center;
    height: 5.6rem;
    font-size: 1.6rem;

    padding: 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: none;
    text-align: center;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.6rem;
    }

    &:hover::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 5.6rem;
  border: none;
  background: none;

  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 3.2rem;
  }

  > svg:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .user-menu {
    display: none;
  }

  .user-menu.active {
    display: flex;
    flex-direction: column;
    align-self: center;

    position: absolute;
    margin-top: 23rem;
    gap: 1rem;
    padding: 1rem;

    z-index: 9999;

    border-radius: 1rem;
    border: none;

    transition: 0.2s;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  }
`

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 0 1.6rem;
  gap: 1.5rem;

  border: none;
  border-radius: 0.8rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
`
