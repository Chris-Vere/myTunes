import { useEffect, useRef } from "react";

type GripProps = {
  percentage: number;
  bounds: DOMRect | undefined;
  onUpdate: (percentage: number) => void;
};

export default function Grip(props: GripProps) {
  const {
    percentage,
    bounds,
    onUpdate = () => {}
  } = props;

  const gripElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      if(bounds) {
        const {clientX: mouseXPos} = e;
        if(mouseXPos >= bounds.x && mouseXPos <= bounds.right) {
          const decimal = (mouseXPos - bounds.left) / (bounds.right - bounds.left);
          onUpdate(decimal);
        }
      }
    }

    const handleMouseUp = () => {
      if(gripElRef.current) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    }

    const handleMouseDown:EventListener = (e) => {
      if(gripElRef.current && e.target === gripElRef.current) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      }
    }

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);  
    }
  }, [bounds, onUpdate]);

  const leftValue = percentage * 100;
  const className = 'absolute bottom-0 left-0 w-2 h-4 rounded bg-gray-400 border border-gray-600 translate-x-[-50%]';

  return (
    <div ref={gripElRef} style={{left: `${leftValue}%`}} className={className} />
  );
}
