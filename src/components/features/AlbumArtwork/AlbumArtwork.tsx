import { ComponentProps } from "react";
export type AlbumArtworkProps = ComponentProps<'img'> & {
  isLoading?: boolean;
  className?: string;
}

export default function AlbumArtwork(props: AlbumArtworkProps) {
  const {
    isLoading,
    className: propClasses,
    ...imgProps
  } = props;

  return (
    <div {...imgProps} className={`flex h-full aspect-square overflow-hidden shadow-lg bg-gradient-to-b from-red-200 to-red-300 ${propClasses}`}>
      {isLoading ? <div className="w-full bg-opacity-50 bg-black" /> : ''}
    </div>
  )
}
