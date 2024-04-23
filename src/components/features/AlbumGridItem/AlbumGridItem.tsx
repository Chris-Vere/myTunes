import styled from "styled-components";
import { Album, AlbumId } from "../../../types/types"
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";
import { UnstyledButton } from "../../elements/Button";

const Button = styled(UnstyledButton)`
  display: block;
  position: relative;
  width: 100%;
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
    <div>
      <Button onClick={() => onClick(album.id, uiPositionIndex)} aria-label={`${album.title}, click to display`}>
        <AlbumArtwork src={album.artworkURL} />
      </Button>
      <h3 className="album-title">{album.title}</h3>
      <p className="album-date">{album.releaseDate}</p>
    </div>
  );
}
