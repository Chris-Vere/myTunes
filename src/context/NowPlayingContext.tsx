import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { Track } from "../types/types";

type NowPlayingContextType = {
  nowPlaying: Track | undefined;
  setNowPlaying: Dispatch<SetStateAction<Track | undefined>>;
};

type NowPlayingProviderType = {
  children?: ReactNode;
}

export const NowPlayingContext = createContext<NowPlayingContextType>({} as NowPlayingContextType);

const NowPlayingProvider = ({children}: NowPlayingProviderType) => {
  const [nowPlaying, setNowPlaying] = useState<Track>();
  return <NowPlayingContext.Provider value={{ nowPlaying, setNowPlaying }}>{children}</NowPlayingContext.Provider>
}

export default NowPlayingProvider;
