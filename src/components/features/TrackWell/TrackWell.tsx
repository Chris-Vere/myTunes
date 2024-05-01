import { Album } from "../../../types/types"
import TrackWellList from "./TrackWellList";
import { useTracksByAlbum } from "../../../hooks/request";
import TrackWellPointer from "./TrackWellPointer";

export type TrackWellProps = {
  indicatorPosition: number;
  album: Album;
}

export default function TrackWell(props: TrackWellProps) {
  const {
    indicatorPosition = 0,
    album,
  } = props;

  const {
    data: trackData = [],
    status: trackStatus,
  } = useTracksByAlbum(album.id);

  const {
    isCached: trackedAreCached,
    isLoading: tracksAreLoading,
  } = trackStatus;
  return (
    <div className="col-start-1 col-end-5 w-[calc(100%+80px)] -mb-5 pt-0 px-10 pb-8 bg-gradient-to-b from-neutral-600 to-neutral-950 bg-[length:100%_60%] bg-no-repeat bg-bottom bg-neutral-600 border-y border-neutral-500 border-b-neutral-800 translate-x-[calc(var(--spacing-album-grid)*-1)] translate-y-[calc(var(--spacing-album-grid)*-0.55)]">
      <TrackWellPointer indicatorPosition={indicatorPosition} />
      <h2>{album.title}</h2>
      <TrackWellList tracks={trackData} />
      {!trackedAreCached && tracksAreLoading && <div className="absolute top-0 left-0 w-full h-full bg-black/75" />}
    </div>
  );
}
