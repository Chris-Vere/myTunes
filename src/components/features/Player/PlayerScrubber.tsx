import { useContext, useEffect, useState } from "react";
import Scrubber from "../../ui/Scrubber/Scrubber";
import { AudioContext } from "../../../context/AudioContext";

export default function PlayerScrubber() {
  const { audioEl } = useContext(AudioContext)!;
  const [playPosition, setPlayPosition] = useState((audioEl && audioEl.currentTime) || 0);

  function handleScrubberSeek (percentage: number) {
    audioEl.currentTime = audioEl.duration * percentage;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const pct = audioEl.currentTime / audioEl.duration;
      setPlayPosition(pct);
    }, 500);

    return () => {
      clearInterval(interval);
    }

  }, [audioEl]);

  return (
    <Scrubber onChange={handleScrubberSeek} percentage={playPosition} />
  );
}
