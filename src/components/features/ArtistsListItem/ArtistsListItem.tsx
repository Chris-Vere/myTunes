import styled from "styled-components";
import { Artist, ArtistId } from "../../../types/types";
import { UnstyledButton } from "../../elements/Button";

const StyledLi = styled.li<{selected?: boolean}>`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  background-color: ${props => props.selected ? 'var(--color-red)' : 'transparent'};
`;

const ArtistButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  padding: 9px;
  font-size: 12px;
  flex: 1;

  &::before {
    --size: 2.5em;

    content: "";
    display: block;
    width: var(--size);
    height: var(--size);
    margin-right: 9px;
    background-color: var(--color-icon);
    border-radius: 50%;
  }
`;

export type ArtistsListItemProps = {
  artist: Artist;
  selected?: boolean;
  onClick?: (artistId:ArtistId) => void;
}

export default function ArtistsListItem(props: ArtistsListItemProps) {
  const {
    artist,
    selected,
    onClick,
  } = props;

  function handleClick() {
    if(onClick) {
      onClick(artist.id);
    }
  }

  return (
    <StyledLi selected={selected}>
      <ArtistButton onClick={handleClick}>
        {artist.name}
      </ArtistButton>
    </StyledLi>
  );
}
