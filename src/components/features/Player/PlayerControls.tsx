import styled from "styled-components";
import { UnstyledButton } from "../../elements/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function PlayerControls() {
  return (
    <Wrapper>
      <UnstyledButton>Prev</UnstyledButton>
      <UnstyledButton>Play</UnstyledButton>
      <UnstyledButton>Next</UnstyledButton>
    </Wrapper>
  );
}
