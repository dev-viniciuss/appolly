import styled from "styled-components"

export const Contact = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem;
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
