import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  /* justify-content: center; */

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > label {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
  }

  > input {
    display: flex;
    height: 5.5rem;
    width: 100%;

    padding: 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    border: 1px solid #ffffff;
    border-radius: 5px;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      /* padding: 1.6rem 0; */
    }
  }
`
