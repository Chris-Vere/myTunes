import { Artist } from "../../../types/types";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import ArtistHeader from "../ArtistHeader/ArtistHeader";

const artist:Artist = {
  name: 'Alice in Chains',
  id: 'Alice in Chains'
}

export default function AlbumsPanel() {
  return (
    <section className="albums-panel">
      <ArtistHeader artist={artist} />
      <AlbumGrid />
    </section>
  );
}
