import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export default styled.button<ButtonProps>`
  background: ${(p) => (p.outlined ? "transparent" : "var(--twitter)")};
  color: ${(p) => (p.outlined ? "var(--twitter)" : "var(--white)")};
  border: ${(p) => (p.outlined ? "1px solid var(--twitter)" : "none")};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => (props.outlined ? "var(--twitter-dark-hover)" : "var(--twitter-light-hover)")};
  }
`;
