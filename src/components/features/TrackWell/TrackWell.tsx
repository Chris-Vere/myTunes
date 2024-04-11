import styled from "styled-components";
import { Track } from "../../../types/types"

const Wrapper = styled.div`
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
    left: calc(12.5% + 20px);
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

const TrackList = styled.ol`
  height: 122px;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 6px var(--spacing-album-grid);
  flex-direction: column;
  flex-wrap: wrap;
`;

export type TrackWellProps = {
  tracks: Track[],
  title?: string,
}

export default function TrackWell(props: TrackWellProps) {
  const {
    tracks,
    title,
  } = props;

  return (
    <Wrapper>
      <h2>{title}</h2>
      <TrackList>
        {
          tracks.map((track) => (
            <li className="track-list-item" key={track.id}>{track.name} <time>{track.duration}</time></li>
          ))
        }
      </TrackList>
    </Wrapper>
  );

  return null;
}
