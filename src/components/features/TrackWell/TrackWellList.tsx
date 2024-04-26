import styled, { css } from "styled-components";
import { Track } from "../../../types/types";
import TrackWellListItem from "./TrackWellListItem";

function getNthChildSelectors(items: number) {
  const numRows = Math.ceil(items / 3);
  return [numRows + 1, numRows * 2 + 1];
}

const TrackList = styled.ol<{$numTracks: number}>`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;

  margin: 0;
  padding: 0;

  li {
    grid-column: 1;

    ${props => {
      const [a, b] = getNthChildSelectors(props.$numTracks);
      return css`
        &:nth-child(n + ${a}) {
          grid-column: span 2;
        }

        &:nth-child(n + ${b}) {
          grid-column: span 3;
        }        
      `
    }}
  }
`;

export type TrackWellTrackListProps = {
  tracks?: Track[]
}

export default function TrackWellTrackList(props: TrackWellTrackListProps) {
  const {
    tracks = [],
  } = props;

  return (
    <TrackList $numTracks={tracks.length}>
      {
        tracks.map((track, index) => (
          <TrackWellListItem key={`${track.id}-${index}`} number={index + 1} track={track} />
        ))
      }
    </TrackList>
  );
}
