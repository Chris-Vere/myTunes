import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const POINTER_SIZE = '24px';

const Wrapper = styled.div`
  width: 100%;
  height: 12px;
  top: -12px;
  overflow: hidden;
  position: relative;
`;

const Clip = styled.div`
  position: relative;
  width: ${() => POINTER_SIZE};
  top: 10px;
  left: -12px;
  margin-bottom: var(--spacing-album-grid);
  aspect-ratio: 1.85;
  border: 1px solid transparent;
  overflow: hidden;
  transition: transform 0.25s ease-in-out;
  
  animation-name: initGridPointer;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 0.25s;
`;

const Pointer = styled.div`
  width: ${() => POINTER_SIZE};
  height: ${() => POINTER_SIZE};
  border: 1px solid var(--color-border);
  background-color: var(--color-gray-light);
  transform-origin: center;
  transform: rotate(45deg) translate(16%, 16%);
`;

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
    <Wrapper ref={wrapperRef}>
      <Clip style={{ transform: `translateX(${xPos}px)` }}>
        <Pointer />
      </Clip>
    </Wrapper>
  );
}
