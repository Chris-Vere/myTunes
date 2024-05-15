import { useArtists } from "../../../hooks/request";
import ArtistNavItem from "./ArtistNavItem";
import { useParams } from "react-router-dom";

export default function ArtistsNav() {
  const { artistId } = useParams();
  const {
    data: artists,
    isLoaded,
  } = useArtists();

  return (
    <nav className="w-1/4 border-r border-gray-600">
      <ul className="m-0">
        {
          isLoaded && artists.map((artist) => (
            <ArtistNavItem
              key={artist.id}
              id={artist.id}
              selected={artist.id === artistId}
              artist={artist} />
          ))
        }
      </ul>
    </nav>
  );
}
