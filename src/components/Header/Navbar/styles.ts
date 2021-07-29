import styled from "styled-components"

export const Container = styled.div`
  height: 5rem;
  background: var(--white);

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  nav {
    height: 5rem;
    font-size: 1.1rem;
    color: var(--black);
    
    display: flex;
    align-items: center;

    gap: 2rem;
    
    a {
      display: inline-block;
      height: 5rem;
      line-height: 5rem;

      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: var(--royal-blue);
        border-bottom: 2px solid var(--royal-blue);
      }

      &:active {
        font-weight: bold;
        border-bottom: 2px solid var(--royal-blue);
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