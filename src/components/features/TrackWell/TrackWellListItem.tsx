import { Track } from "../../../types/types"
import { useContext } from "react";
import { NowPlayingContext } from "../../../context/NowPlayingContext";

export type TrackWellListItemProps = {
  number: number;
  track: Track;
}

export default function TrackWellListItem(props: TrackWellListItemProps) {
  const {
    number,
    track,
  } = props;

  const { nowPlaying, setNowPlaying} = useContext(NowPlayingContext);
  
  function handleClick() {
    setNowPlaying(track);
  }

  return (
    <li role="listitem" className={`flex  ${nowPlaying === track ? 'text-neutral-800 bg-neutral-500' : ''}`}>
      <button type="button" onDoubleClick={handleClick} className="flex grow items-start text-sm text-left leading-6 p-1 pl-0">
        <span>{number}.</span>
        <span className="ml-2">
          {track.name}
          {<span className="mx-2">play</span>}
        </span>
        <time className="ml-auto">{track.duration}</time>
      </button>
    </li>
  );
}
