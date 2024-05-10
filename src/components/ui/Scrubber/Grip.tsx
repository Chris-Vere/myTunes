import { useRef, useState } from "react";
import useScrub from "./useScrub";
import useLeftValue from "./useLeftValue";

type GripProps = {
  percentage: number;
  bounds: DOMRect | undefined;
  onUpdate?: (percentage: number) => void;
};

export default function Grip(props: GripProps) {
  const {
    percentage,
    bounds,
    onUpdate = () => {},
  } = props;

  const gripElRef = useRef<HTMLDivElement>(null);
  const [leftValue, setLeftValue] = useState(percentage * 100);

  useScrub(bounds, gripElRef, onUpdate);
  useLeftValue(setLeftValue, percentage);
  
  const className = 'absolute bottom-0 left-0 w-2 h-4 rounded bg-gray-400 border border-gray-600 translate-x-[-50%]';

  return (
    <div ref={gripElRef} style={{left: `${leftValue}%`}} className={className} />
  );
}
