import styled from "styled-components"

export const Container = styled.div`
  background: var(--white);

  margin: 0 auto;
  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  nav {
    font-size: 1.1rem;
    color: var(--black);
    
    display: flex;
    align-items: center;

    gap: 2rem;
    
    a {
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: var(--royal-blue)
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 2px;

    font-size: 1rem;

    background: var(--royal-blue);
    color: var(--white);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);  
    }

  }
`