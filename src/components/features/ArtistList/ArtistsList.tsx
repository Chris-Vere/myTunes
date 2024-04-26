import { useArtists } from "../../../hooks/request";
import Ul from "../../elements/Ul";
import ArtistsListItem from "../ArtistsListItem/ArtistsListItem";
import { useParams } from "react-router-dom";

export default function ArtistsList() {
  const { artistId } = useParams();
  const {
    data: artists = [],
    status,
  } = useArtists();

  return (
    <Ul>
      {
        status.isLoaded && artists.map((artist) => (
          <ArtistsListItem
            key={artist.id}
            id={artist.id}
            selected={artist.id === artistId}
            artist={artist} />
        ))
      }
    </Ul>
  );
}
