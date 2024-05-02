import PlaybackStatus from "./PlaybackStatus";
import PlayerControls from "./PlayerControls";

export default function Player() {
  return (
    <section className="h-20 bg-neutral-700">
      <PlayerControls />
      <PlaybackStatus />
    </section>
  );
}
