import PlaybackStatus from "./PlaybackStatus";
import PlayerControls from "./PlayerControls";

export default function Player() {
  return (
    <section className="player">
      <PlayerControls />
      <PlaybackStatus />
    </section>
  );
}
