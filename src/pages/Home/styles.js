import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  overflow: auto;
  overflow: overlay;
`

export const Content = styled.div`
  grid-area: content;
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 12.4rem 0;

  font-family: 'Poppins', sans-serif;
  margin-bottom: 6.2rem;

  > img {
    position: absolute;
    z-index: 1;
    margin-bottom: -1.5rem;
  }

  .background {
    padding: 2.6rem 5.4rem 0;
    width: 112rem;
    height: 26rem;
    margin-top: 16.4rem;
    /* margin-left: 20rem; */

    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

    position: relative;

    border: 1px solid black;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .title {
    padding: 1rem;
  }

  > h1 {
    font-weight: 500;
    font-size: 4rem;
    line-height: 5.6rem;
  }

  > span {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;
  }
`
