import { useState } from "react";

type ScrubberProps = {
  pct?: number;
  onEndSeek?: (percentage:number) => void;
}

export default function Scrubber(props: ScrubberProps) {
  const {
    pct = 0.3,
  } = props;
  console.log('pct', pct);
  
  const [percentage, setPercentage] = useState(pct);

  return (
    <div className="w-full bg-black">
      <div style={{transform: `scale(${percentage}, 1)`}} className="w-full h-2 bg-gray-400 pointer-events-none origin-left transition-transform" />
    </div>
  );
}
