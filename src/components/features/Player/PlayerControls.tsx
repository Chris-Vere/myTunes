import { useContext } from "react";
import { AudioContext } from "../../../context/AudioContext";
import Button from "../../ui/Button";
import useToggle from "../../../hooks/toggle";

export default function PlayerControls() {
  const { audioEl, isPaused, setIsPaused } = useContext(AudioContext)!;
  const [isLooping, toggleLooping] = useToggle(audioEl.loop);

  function handlePlay() {
    setIsPaused(false);
  }

  function handlePause() {
    setIsPaused(true);
  }

  function handleLoop() {
    toggleLooping();
  }
  
  audioEl.loop = isLooping;
  const isRepeating = isLooping.toString();
  

  const btnClasses = 'bg-gray-600 px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-800';
  return (
    <div className="flex items-center gap-2">
      { isPaused && <Button className={btnClasses} onClick={handlePlay}>Play</Button> }
      { !isPaused && <Button className={btnClasses} onClick={handlePause}>Pause</Button> }
      <Button className={btnClasses} onClick={handleLoop}>Repeating: {isRepeating}</Button>
    </div>
  );
}
