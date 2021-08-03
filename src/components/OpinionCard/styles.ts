import styled from 'styled-components'

export const Container = styled.div`
  background: var(--white);
  box-shadow: 5px 10px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 2rem 1.5rem;

  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 560px;

    h2 {
      font-size: 1.5rem;
      color: var(--black);
    }

    p {
      color: var(--gray);
    }
  }
`