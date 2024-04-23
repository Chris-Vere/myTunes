import { Artist } from "../../../types/types";
import Ul from "../../elements/Ul";
import ArtistsListItem from "../ArtistsListItem/ArtistsListItem";
import { useParams } from "react-router-dom";

const artists:Artist[] = [
  {
    name: 'AC-DC',
    id: 'AC-DC',
  },
  {
    name: 'The Acacia Strain',
    id: 'The Acacia Strain',
  },
  {
    name: 'Aesop Rock',
    id: 'Aesop Rock',
  },
  {
    name: 'Alice In Chains',
    id: '1',
  },
]

export default function ArtistsList() {
  const { artistId } = useParams();

  return (
    <Ul>
      {
        artists.map((artist) => (
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
