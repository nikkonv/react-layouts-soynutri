import styled from "styled-components";

// styled components definitions
export const ButtonStyled = styled.button`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  background: var(--mainPurple);
  border: 0.05em solid var(--mainPurple);
  padding: 0.35em;
  border-radius: 5px;
  transition: all 0.5s, ease-in-out;
  &:hover {
    background: white;
    color: var(--mainPurple);
    border-color: var(--mainPurple);
  }
  &:focus {
    outline: none;
  }
`;
