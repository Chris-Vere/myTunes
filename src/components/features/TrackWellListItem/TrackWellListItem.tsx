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
  align-items: center;
  font-size: 14px;
  line-height: 1;
  padding: 6px 8px;
  border-radius: 6px;
`;

const TrackNumber = styled.span`
`;

const TrackName = styled.span`
  margin-left: 8px;
`;

const PlayIcon = styled.span`
  margin-left: 8px;
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

  const [shouldRenderPlayBtn, setShouldRenderPlayBtn] = useState(false);

  function onMouseOver() {
    setShouldRenderPlayBtn(true);
  }

  function onMouseOut() {
    setShouldRenderPlayBtn(false);
  }

  return (
    <Li role="listitem">
      <Button type="button" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <TrackNumber>{number}.</TrackNumber>
        <TrackName>{track.name}</TrackName>
        {shouldRenderPlayBtn && <PlayIcon>play</PlayIcon>}
        <Duration>{track.duration}</Duration>
      </Button>
    </Li>
  );
}
