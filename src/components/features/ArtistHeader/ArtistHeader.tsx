import { Artist } from "../../../types/types";
import { CircleButton } from "../../elements/Button";

export type ArtistHeaderProps = {
  artist: Artist;
}

export default function ArtistHeader(props: ArtistHeaderProps) {
  const { artist } = props;
  return (
    <header className="py-0 px-10 bg-gray-900">
      <div className="flex items-center justify-between border border-b-gray-400">
        <h2 className="text-xl font-bold leading-4 m-0 py-2 px-0">{artist.name}</h2>
        <CircleButton></CircleButton>
      </div>
      <p className="text-xs mt-2 mx-0 mb-6">Alternative</p>
    </header>
  );
}
