import { useEffect, useRef, useState } from "react";

const NUM_COLS = 4;
const GAP_WIDTH = 40;

type TrackWellPointerProps = {
  indicatorPosition: number;
}

export default function TrackWellPointer(props: TrackWellPointerProps) {
  const {
    indicatorPosition,
  } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    if(wrapperRef.current) {
      const { width } = wrapperRef.current.getBoundingClientRect();

      const totalGapsWidth = (NUM_COLS - 1) * GAP_WIDTH;
      const totalSegmentsWidth = width - totalGapsWidth;
      const segmentWidth = totalSegmentsWidth / NUM_COLS;
      
      if(indicatorPosition === 0) {
        setXPos(segmentWidth / 2);
      } else {

        const offset = (segmentWidth / 2) + (GAP_WIDTH + segmentWidth) * indicatorPosition;
        setXPos(offset);
      }
    }
  }, [indicatorPosition]);

  return (
    <div ref={wrapperRef} className="relative w-full h-[12px] -top-[12px] overflow-hidden">
      <div
        style={{ transform: `translateX(${xPos}px)` }}
        className="
          relative
          w-[24px]
          aspect-[1/0.54]
          top-[10px]
          -left-[12px]
          mb-[40px]
          border-transparent
          overflow-hidden
          transition-transform
          duration-300
          ease-in-out
          animation-fill-mode-forwards
          animate-delay-300
          animate-duration-300
          animate-ease-in-out
          animate-[initGridPointer]">
        {/* <Pointer /> */}
        <div className="w-[24px] h-[24px] border border-gray-600 bg-gray-400 origin-center rotate-45 translate-y-[20%]" />
      </div>
    </div>
  );
}
