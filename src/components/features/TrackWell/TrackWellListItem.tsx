import styled from "styled-components";
import { Track } from "../../../types/types"
import { UnstyledButton } from "../../elements/Button";
import { useState } from "react";

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

  const [playBtnOpacity, setPlayBtnOpacity] = useState(0);

  function onMouseOver() {
    setPlayBtnOpacity(1);
  }

  function onMouseOut() {
    setPlayBtnOpacity(0);
  }

  return (
    <Li role="listitem">
      <Button type="button" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <TrackNumber>{number}.</TrackNumber>
        <TrackName>
          {track.name}
          {<PlayIcon style={{opacity: playBtnOpacity}}>play</PlayIcon>}
        </TrackName>
        <Duration>{track.duration}</Duration>
      </Button>
    </Li>
  );
}
