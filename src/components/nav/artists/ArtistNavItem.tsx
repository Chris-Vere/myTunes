import { Artist, ArtistId } from "../../../types/types";
import { Link } from "react-router-dom";

type ArtistNavItemProps = {
  artist: Artist;
  selected?: boolean;
  id: ArtistId;
}

export default function ArtistNavItem(props: ArtistNavItemProps) {
  const {
    artist,
    selected,
    id,
  } = props;

  return (
    <li className={`flex border-b border-gray-600 ${selected ? 'bg-red-300' : 'bg-transparent'}`}>
      <Link to={`/artists/${id}/albums/`} className="flex flex-1 items-center p-2 text-xs font-extralight before:w-[24px] before:aspect-square before:mr-2 before:rounded-full before:bg-red-100">
        {artist.name}
      </Link>
    </li>
  );
}
