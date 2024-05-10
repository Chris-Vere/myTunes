import { useParams } from "react-router-dom";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import ArtistHeader from "../ArtistHeader/ArtistHeader";

export default function AlbumsPanel() {
  
  const { artistId } = useParams();

  return (
    <section className="albums-panel">
      <ArtistHeader />
      <AlbumGrid key={artistId} />
    </section>
  );
}
