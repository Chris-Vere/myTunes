import { useState } from "react";
import { Artist, ArtistId } from "../../../types/types";
import Ul from "../../elements/Ul";
import ArtistsListItem from "../ArtistsListItem/ArtistsListItem";

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
    id: 'Alice In Chains',
  },
]

export default function ArtistsList() {
  const [ selectedArtist, setSelectedArtist ] = useState<ArtistId>(artists[0]?.id);

  return (
    <Ul>
      {
        artists.map((artist) => (
          <ArtistsListItem
            key={artist.id}
            selected={artist.id === selectedArtist}
            onClick={(id: ArtistId) => setSelectedArtist(id)}
            artist={artist} />
        ))
      }
    </Ul>
  );
}
