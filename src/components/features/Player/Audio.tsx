import { useContext, useEffect, useRef } from "react";
import { AudioContext } from "../../../context/AudioContext";
import { NowPlayingContext } from "../../../context/NowPlayingContext";

export default function Audio() {
  const { nowPlaying } = useContext(NowPlayingContext)!;
  const { audioEl: contextAudioEl } = useContext(AudioContext)!;
  const audioTargetRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if(audioTargetRef && audioTargetRef.current) {
      audioTargetRef.current.replaceWith(contextAudioEl)
    }
  }, [contextAudioEl]);

  useEffect(() => {
    const { url: src } = nowPlaying || { url: '' };

    if(src !== '') {
      contextAudioEl.src = src;
      contextAudioEl.play();
   }
 }, [contextAudioEl, nowPlaying]);

 return <div ref={audioTargetRef} />;
}
