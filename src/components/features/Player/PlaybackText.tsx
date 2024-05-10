import { Track } from "../../../types/types";

const emDashChar = String.fromCharCode(8212);

type PlaybackTextProps = {
  track: Track;
}

export default function PlaybackText(props: PlaybackTextProps) {
  const {
    track,
  } = props;


  return (
    <>
      <h2 className="font-semibold">{track.name || 'No Track Selected'}</h2>
      <p>{track.artistName} {emDashChar} {track.albumName}</p>
    </>
  );
}
