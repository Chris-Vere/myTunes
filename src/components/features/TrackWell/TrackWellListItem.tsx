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
  
  const baseLiClasses = 'flex py-1 px-2 rounded-md';
  const selectedLiClasses = nowPlaying === track ? 'text-gray-1000 bg-gray-200 hover:text-gray-1000 hover:bg-gray-200' : '';
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
