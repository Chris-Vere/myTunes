import styled from "styled-components";
import { Artist } from "../../../types/types";
import { CircleButton } from "../../elements/Button";

export type ArtistHeaderProps = {
  artist: Artist;
}

const StyledHeader = styled.header`
  padding: 0 40px;
  background-color: var(--color-gray-dark);
`;

const StyledHeading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  padding: 0.5em 0;
`;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
`;

const Genre = styled.p`
  font-size: 12px;
  margin: 0.5em 0 1.5em;
`;

export default function ArtistHeader(props: ArtistHeaderProps) {
  const { artist } = props;
  return (
    <StyledHeader>
      <StyledWrap>
        <StyledHeading>{artist.name}</StyledHeading>
        <CircleButton></CircleButton>
      </StyledWrap>
      <Genre>Alternative</Genre>
    </StyledHeader>
  );
}
