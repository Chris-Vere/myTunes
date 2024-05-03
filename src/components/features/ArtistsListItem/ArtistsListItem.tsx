import { Artist, ArtistId } from "../../../types/types";
import { Link } from "react-router-dom";

export type ArtistsListItemProps = {
  artist: Artist;
  selected?: boolean;
  id: ArtistId;
}

export default function ArtistsListItem(props: ArtistsListItemProps) {
  const {
    artist,
    selected,
    id,
  } = props;

  return (
    <li className={`flex border-b border-gray-600 ${selected ? 'bg-red-700' : 'bg-transparent'}`}>
      <Link to={`/${id}`} className="flex flex-1 items-center p-2 text-xs font-extralight text-white before:w-[24px] before:aspect-square before:mr-2 before:rounded-full before:bg-red-400">
        {artist.name}
      </Link>
    </li>
  );
}
