import styled from "styled-components";
import { Album, AlbumId } from "../../../types/types"
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";
import { UnstyledButton } from "../../elements/Button";

const Wrapper = styled(UnstyledButton)`
  display: block;
  position: relative;
  font-size: 12px;
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0deg 0% 0% / 50%);
`;

export type AlbumGridItemProps = {
  album: Album;
  onClick?: (id:AlbumId, uiPositionIndex:number) => void;
  uiPositionIndex: number;
  loading?: boolean;
}

export default function AlbumGridItem(props: AlbumGridItemProps) {
  const {
    album,
    onClick = () => {},
    uiPositionIndex,
    loading = false,
  } = props;

  return (
    <Wrapper onClick={() => onClick(album.id, uiPositionIndex)}>
      <AlbumArtwork src={album.artworkURL} />
      <h3 className="album-title">{album.title}</h3>
      <p className="album-date">{album.releaseDate}</p>
      {loading && <Loader />}
    </Wrapper>
  );
}
