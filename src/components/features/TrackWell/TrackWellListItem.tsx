import styled from "styled-components";
import { Track } from "../../../types/types"
import { UnstyledButton } from "../../elements/Button";
import { useContext } from "react";
import { NowPlayingContext } from "../../../context/NowPlayingContext";

const Li = styled.li`
  display: flex;

  &.-selected {
    color: var(--color-gray-dark);
    background-color: var(--color-icon);
  }
`;

const Button = styled(UnstyledButton)`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  font-size: 14px;
  text-align: left;
  line-height: 1.5;
  padding: 6px 6px 6px 0;
  border-radius: 6px;
`;

const TrackNumber = styled.span`
`;

const TrackName = styled.span`
  margin-left: 8px;
`;

const PlayIcon = styled.span`
  margin-left: 8px;
  margin-right: 8px;
`;

const Duration = styled.time`
  margin-left: auto;
`;

export type TrackWellListItemProps = {
  number: number;
  track: Track;
}

export default function TrackWellListItem(props: TrackWellListItemProps) {
  const {
    number,
    track,
  } = props;

  const { nowPlaying, setNowPlaying} = useContext(NowPlayingContext);
  
  function handleClick() {
    setNowPlaying(track);
  }

  return (
    <Li role="listitem" className={nowPlaying === track ? '-selected' : ''}>
      <Button type="button" onDoubleClick={handleClick}>
        <TrackNumber>{number}.</TrackNumber>
        <TrackName>
          {track.name}
          {<PlayIcon>play</PlayIcon>}
        </TrackName>
        <Duration>{track.duration}</Duration>
      </Button>
    </Li>
  );
}
