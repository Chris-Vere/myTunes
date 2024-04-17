import styled from "styled-components";
import { Track } from "../../../types/types";
import TrackWellListItem from "../TrackWellListItem/TrackWellListItem";

const TrackList = styled.ol`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
`;

export type TrackWellTrackListProps = {
  tracks?: Track[]
}

export default function TrackWellTrackList(props: TrackWellTrackListProps) {
  const {
    tracks = [],
  } = props;

  return (
    <TrackList>
      {
        tracks.map((track, index) => (
          <TrackWellListItem key={track.id} number={index + 1} track={track} />
        ))
      }
    </TrackList>
  );
}
