// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
// import { useAlbumsByArtistId } from "../../../hooks/request";
// import SelectedAlbumContext from "../../../context/AlbumsContext";

export default function AlbumsPanel() {
  
  const { artistId } = useParams();

  return (
    <section className="albums-panel">
      
        {/* <ArtistHeader artist={artist} /> */}
        <AlbumGrid key={artistId} />
    </section>
  );
}
