import styled from "styled-components";
import { Artist, ArtistId } from "../../../types/types";
import { Link } from "react-router-dom";

const StyledLi = styled.li<{selected?: boolean}>`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  background-color: ${props => props.selected ? 'var(--color-red)' : 'transparent'};
`;

const ArtistLink = styled(Link)`
  color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 9px;
  font-size: 12px;
  flex: 1;
  text-decoration: none;

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
  id: ArtistId;
}

export default function ArtistsListItem(props: ArtistsListItemProps) {
  const {
    artist,
    selected,
    id,
  } = props;

  return (
    <StyledLi selected={selected}>
      <ArtistLink to={`/${id}`}>
        {artist.name}
      </ArtistLink>
    </StyledLi>
  );
}
