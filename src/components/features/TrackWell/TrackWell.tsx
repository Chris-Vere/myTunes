import styled from "styled-components";
import { Album } from "../../../types/types"
import TrackWellList from "./TrackWellList";
import { useTracksByAlbum } from "../../../hooks/request";
import TrackWellPointer from "./TrackWellPointer";

const Wrapper = styled.div`
  grid-column: 1/5;
  padding: 0 var(--spacing-album-grid) 2em;
  width: calc(100% + (var(--spacing-album-grid) * 2));
  margin-bottom: -20px;
  transform:
    translateX(calc(var(--spacing-album-grid) * -1))
    translateY(calc(var(--spacing-album-grid) * -0.55));
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-gray-light);
  background-size: 100% 30px;
  background-position: 0 bottom;
  background-repeat: no-repeat;
  background-image: linear-gradient(var(--color-gray-light), var(--color-gray-dark));
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
  indicatorPosition: number;
  album: Album;
}

export default function TrackWell(props: TrackWellProps) {
  const {
    indicatorPosition = 0,
    album,
  } = props;

  const {
    data: trackData = [],
    isLoading: tracksAreLoading,
  } = useTracksByAlbum(album.id);

  return (
    <Wrapper>
      <TrackWellPointer indicatorPosition={indicatorPosition} />
      <h2>{album.title}</h2>
      <TrackWellList tracks={trackData} />
      {tracksAreLoading && <Loader />}
    </Wrapper>
  );
}
