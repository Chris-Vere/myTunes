import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Indicator from "./Indicator";
import Grip from "./Grip";

export type ScrubberProps = {
  onEndSeek?: (percentage:number) => void;
}

export default function Scrubber(props: ScrubberProps) {
  const {
    onEndSeek = () => {},
  } = props;
  
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackBounds, setTrackBounds] = useState<DOMRect>();
  const [uiPercentage, setUiPercentage] = useState(0);

  const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
    if(trackBounds){
      const clickPosition = e.clientX - trackBounds.x;
      const pct = clickPosition / trackBounds.width;
      
      setUiPercentage(pct);
      onEndSeek(pct);
    }
  }

  const handleGripUpdate = (gripPercentage:number) => {
    setUiPercentage(gripPercentage);
    onEndSeek(gripPercentage);
  }

  useEffect(() => {
    const { current: trackEl } = trackRef;
    if(trackEl) {
      setTrackBounds(trackEl.getBoundingClientRect());
    }
  }, []);

  return (
    <div ref={trackRef} onClick={handleClick} className="relative w-full bg-gray-350 mt-auto">
      <Indicator percentage={uiPercentage} />
      <Grip percentage={uiPercentage} bounds={trackBounds} onUpdate={handleGripUpdate} />
    </div>
  );
}
