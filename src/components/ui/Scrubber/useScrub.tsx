import { RefObject, useEffect } from "react";

type useScrubType = (
  bounds: DOMRect | undefined,
  gripElRef: RefObject<HTMLDivElement>,
  onUpdate: (percentage: number) => void
) => void;

const useScrub: useScrubType = (bounds, gripElRef, onUpdate) => {
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
  }, [bounds, onUpdate, gripElRef]);
}

export default useScrub;
