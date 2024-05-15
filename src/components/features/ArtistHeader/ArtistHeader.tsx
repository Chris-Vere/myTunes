import { useParams } from "react-router-dom";
import { CircleButton } from "../../elements/Button";
import { useArtistById } from "../../../hooks/request";


export default function ArtistHeader() {
  const { artistId } = useParams();
  
  const {
    data,
    isLoaded,
  } = useArtistById(artistId!);

  const artistName = isLoaded ? data.name : '';

  return (
    <header className="px-10 mb-5">
      <div className="flex items-center justify-between py-4 border-b border-b-gray-400">
        <h2 className="text-2xl font-bold leading-4 m-0">{artistName}</h2>
        <CircleButton></CircleButton>
      </div>
    </header>
  );
}
