import styled from "styled-components";

const UnstyledButton = styled.button`
  padding: 0%;
  border: none;
  border-radius: 0%;
  background: none;
  box-shadow: none;
  appearance: none;
  color: inherit;
`;

const CircleButton = styled(UnstyledButton)`
  --size: 1.5em;

  display: block;
  content: "";
  width: var(--size);
  height: var(--size);
  margin-left: 0.25em;
  margin-right: 0.75em;
  border-radius: 50%;
  background-color: var(--color-icon);
`;

export {
  UnstyledButton,
  CircleButton,
}
