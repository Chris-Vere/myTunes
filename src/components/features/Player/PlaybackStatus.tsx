import { useContext } from "react";
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";
import { NowPlayingContext } from "../../../context/NowPlayingContext";
import PlaybackText from "./PlaybackText";
import Scrubber from "../../ui/Scrubber";

export default function PlaybackStatus() {
  const { nowPlaying } = useContext(NowPlayingContext);

  return (
    <div className="w-96 flex mx-auto items-center bg-gray-400 rounded-md overflow-clip">
      <AlbumArtwork className="" />
      <div className="flex flex-col grow h-full">
        <div className="text-xs text-center py-2">
          {nowPlaying && <PlaybackText track={nowPlaying} /> }
        </div>
        <Scrubber />
      </div>
    </div>
  );
}
