import { Track } from "../../../types/types";

type PlaybackTextProps = {
  track: Track;
}

export default function PlaybackText(props: PlaybackTextProps) {
  const {
    track,
  } = props;

  const emDash = String.fromCharCode(8212);

  return (
    <>
      <h2 className="font-semibold">{track.name || 'No Track Selected'}</h2>
      <p>{track.artistName} {emDash} {track.albumName}</p>
    </>
  );
}
