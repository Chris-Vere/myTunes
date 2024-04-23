import { useParams } from "react-router-dom";
import { Artist } from "../../../types/types";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import ArtistHeader from "../ArtistHeader/ArtistHeader";

const artist:Artist = {
  name: 'Alice in Chains',
  id: 'Alice in Chains'
}

export default function AlbumsPanel() {
  const { artistId } = useParams();
  
  return (
    <section className="albums-panel">
      <ArtistHeader artist={artist} />
      <AlbumGrid />
    </section>
  );
}
