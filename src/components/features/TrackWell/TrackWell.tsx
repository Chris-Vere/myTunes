import styled from "styled-components";
import { Track } from "../../../types/types"
import { ReactNode, useEffect, useRef, useState } from "react";
import TrackWellTrackList from "../TrackWellTrackList/TrackWellTrackList";

const Wrapper = styled.div<{ $position: number }>`
  grid-column: 1/5;
  padding: 2em var(--spacing-album-grid);
  width: calc(100% + (var(--spacing-album-grid) * 2));
  margin-bottom: -20px;
  transform:
    translateX(calc(var(--spacing-album-grid) * -1)) translateY(calc(var(--spacing-album-grid) * -0.55));
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-gray-light);
  background-size: 100% 30px;
  background-position: 0 bottom;
  background-repeat: no-repeat;
  background-image: linear-gradient(var(--color-gray-light), var(--color-gray-dark));

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: calc(${props => `${props.$position}px`} + 40px);
    transform: translateX(-50%);
    border-style: solid;
  }

  &:before {
    top: -23px;
    border-color: transparent transparent var(--color-border) transparent;
    border-width: 11px;
  }

  &:after {
    top: -20px;
    border-color: transparent transparent var(--color-gray-light) transparent;
    border-width: 10px;
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: hsl(0deg 0% 0% / 50%);
`;

export type TrackWellProps = {
  tracks: Track[];
  title?: string;
  position: number;
  onClose?: () => void;
  isLoading?: boolean;
  children?: ReactNode;
}

export default function TrackWell(props: TrackWellProps) {
  const {
    tracks,
    title,
    position = 0,
    onClose = () => {},
    isLoading = false,
    children,
  } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const NUM_COLS = 4;
  const PADDING_X = 80;
  const GAP_WIDTH = 40;
  const [xPos, setXPos] = useState(0);
  
  useEffect(() => {
    if(wrapperRef.current) {
      const { width } = wrapperRef.current.getBoundingClientRect();
      const innerWidth = width - PADDING_X;

      const totalGapsWidth = (NUM_COLS - 1) * GAP_WIDTH;
      const totalSegmentsWidth = innerWidth - totalGapsWidth;
      const segmentWidth = totalSegmentsWidth / NUM_COLS;
      
      if(position === 0) {
        setXPos(segmentWidth / 2);
      } else {
        const gapsWidth = GAP_WIDTH * position;
        const segmentsWidth = segmentWidth * position;
        const total = gapsWidth + segmentsWidth + (segmentWidth / 2);
        
        setXPos(total);
      }
    }
  }, [position]);

  return (
    <Wrapper $position={xPos} ref={wrapperRef}>
      <button onClick={onClose}>Close</button>
      <h2>{title}</h2>
      <TrackWellTrackList tracks={tracks} />
      {isLoading && <Loader />}
      {children && <div>{children}</div>}
    </Wrapper>
  );
}
