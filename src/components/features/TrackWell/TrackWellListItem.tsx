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

  const { nowPlaying, setNowPlaying } = useContext(NowPlayingContext);
  
  function handleDoubleClick() {
    setNowPlaying(track);
  }
  
  const baseLiClasses = 'flex py-1 px-2 rounded-md hover:bg-neutral-400 hover:text-neutral-900';
  const selectedLiClasses = nowPlaying === track ? 'text-neutral-900 bg-neutral-500 hover:bg-neutral-500 hover:text-neutral-900' : '';
  const buttonClasses = 'flex grow items-start text-sm text-left leading-6';

  return (
    <li role="listitem" className={`${baseLiClasses} ${selectedLiClasses}`}>
      <button type="button" onDoubleClick={handleDoubleClick} className={buttonClasses}>
        <span>{number}.</span>
        <span className="ml-2">
          {track.name}
        </span>
        <time className="ml-auto">{track.duration}</time>
      </button>
    </li>
  );
}
