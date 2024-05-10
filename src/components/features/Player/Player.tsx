import Audio from "../Audio/Audio";
import PlaybackStatus from "./PlaybackStatus";
import PlayerControls from "./PlayerControls";

export default function Player() {
  return (
    <section className="flex h-20 py-2 px-4 bg-gray-700">
      <PlayerControls />
      <PlaybackStatus />
      <Audio />
    </section>
  );
}
