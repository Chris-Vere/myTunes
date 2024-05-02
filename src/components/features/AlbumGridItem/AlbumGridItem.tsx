import { Album, AlbumId } from "../../../types/types"
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";

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
      <button onClick={() => onClick(album.id, uiPositionIndex)} aria-label={`${album.title}, click to display`} className="block relative w-full text-sm">
        <AlbumArtwork src={album.artworkURL} className="rounded-md" />
      </button>
      <h3 className="my-1">{album.title}</h3>
      <p>{album.releaseDate}</p>
    </div>
  );
}
