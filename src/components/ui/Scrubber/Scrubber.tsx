import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Indicator from "./Indicator";
import Grip from "./Grip";

export type ScrubberProps = {
  onChange?: (percentage:number) => void;
  percentage?: number;
}

export default function Scrubber(props: ScrubberProps) {
  const {
    onChange = () => {},
    percentage = 0,
  } = props;
  
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackBounds, setTrackBounds] = useState<DOMRect>();
  const [uiPercentage, setUiPercentage] = useState(percentage);

  const handleClick:MouseEventHandler<HTMLDivElement> = (e) => {
    if(trackBounds){
      const clickPosition = e.clientX - trackBounds.x;
      const pct = clickPosition / trackBounds.width;
      
      setUiPercentage(pct);
      onChange(pct);
    }
  }

  const handleGripUpdate = (gripPercentage:number) => {
    setUiPercentage(gripPercentage);
    onChange(gripPercentage);
  }

  useEffect(() => {
    const { current: trackEl } = trackRef;
    if(trackEl) {
      setTrackBounds(trackEl.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    setUiPercentage(percentage);
  }, [percentage]);

  return (
    <div ref={trackRef} onClick={handleClick} className="relative w-full bg-gray-350 mt-auto">
      <Indicator percentage={uiPercentage} />
      <Grip percentage={uiPercentage} bounds={trackBounds} onUpdate={handleGripUpdate} />
    </div>
  );
}
