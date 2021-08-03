import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Section = styled.section`
  width: 100%;

  padding: 5rem 2rem;
  background: var(--royal-blue);

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CardHome = styled.div`
  display: flex;
  flex-direction: row;

  span {
    height: 31rem;
    width: 33rem;

    border: 18px solid #7572FF;

    margin-left: 2rem;
  }
`

export const CardMain = styled.div`
  position: absolute;

  height: 25rem;
  width: 32rem;

  margin-top: 3rem;
  padding: 2.5rem 2rem;

  background: var(--white);

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--royal-blue);
  }

  p {
    color: var(--gray);
  }

  h3 {
    margin: 4rem 0 1rem;
    font-size: 1.5rem;
    color: var(--black);
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.7rem 2rem;
      border: 0;
      border-radius: 3px;
      font-size: 1.2rem;

      display: flex;
      gap: 0.4rem;
      align-items: center;

      background: var(--black);
      color: var(--white);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const AboutContainer = styled.div`
  width: 100%;
  padding: 5rem 2rem;

  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    max-width: 720px;
    gap: 2rem;

    h1 {
      color: var(--black);
    }

    p {
      color: var(--gray);
      line-height: 1.5rem;
    }
  }

  .opinionContainer {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin: 5rem 0;

    .cardContainer {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

`