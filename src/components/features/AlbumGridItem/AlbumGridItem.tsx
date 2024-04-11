import styled from "styled-components";
import { Album, AlbumId } from "../../../types/types"
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";
import { UnstyledButton } from "../../elements/Button";

const Wrapper = styled(UnstyledButton)`
  display: block;
  font-size: 12px;
`;

export type AlbumGridItemProps = {
  album: Album;
  onClick?: (id:AlbumId, uiPositionIndex:number) => void;
  uiPositionIndex: number;
}

export default function AlbumGridItem(props: AlbumGridItemProps) {
  const {
    album,
    onClick = () => {},
    uiPositionIndex,
  } = props;

  return (
    <Wrapper onClick={() => onClick(album.id, uiPositionIndex)}>
      <AlbumArtwork src={album.artworkURL} />
      <h3 className="album-title">{album.title}</h3>
      <p className="album-date">{album.releaseDate}</p>
    </Wrapper>
  );
}
