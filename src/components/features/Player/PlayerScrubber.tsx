import Scrubber, { ScrubberProps } from "../../ui/Scrubber/Scrubber";

type PlayerScrubberProps = ScrubberProps;

export default function PlayerScrubber(props: PlayerScrubberProps) {
  return (
    <Scrubber {...props} />
  );
}
