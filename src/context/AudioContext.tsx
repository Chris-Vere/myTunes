import { ReactNode, createContext, useState } from "react";

const audioEl = document.createElement('audio');
export const AudioContext = createContext<{
  audioEl: HTMLAudioElement;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}>({
  audioEl,
  isPaused: false,
  setIsPaused: () => {}
});

export default function AudioContextProvider({ children }: {children: ReactNode}) {
  const [isPaused, setIsPausedState] = useState(false);
  const setIsPaused = (paused: boolean) => {
    if(paused) {
      audioEl.pause();
    } else {
      audioEl.play();
    }

    setIsPausedState(paused);
  };

  const value = {
    audioEl,
    isPaused,
    setIsPaused
  }
  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}
