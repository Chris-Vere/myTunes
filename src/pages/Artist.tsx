import { Link, useParams } from "react-router-dom";
import { useArtistById } from "../hooks/request";

export default function ArtistPage() {
  const { artistId } = useParams();
  const {
    data,
    isLoaded,
  } = useArtistById(artistId!);

  if(isLoaded) {
    return (
      <div>
        <h1 className="mb-2 text-xl font-bold">{data.name}</h1>
        <ol>
          {
            data.albums.map(({id}) => {
              return <li key={id}><Link to={`albums/`}>Album ID: {id}</Link></li>
            })
          }
        </ol>
      </div>
    );
  }

  return (
    <h1>Artist: {artistId}</h1>
  );
}
