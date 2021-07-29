import styled from "styled-components"

export const Contact = styled.div`
  height: 3rem;
  padding: 0rem 2rem;
  background: var(--royal-blue);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContactLeftContainer = styled.div`
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 5rem;

  span {
    display: flex;
    align-items: center;

    gap: 0.8rem;
  }
`

export const ContactRightContainer = styled.div`
  font-size: 20px;
  gap: 2rem;
  cursor: pointer;
  display: flex;
`
