import { ComponentProps } from "react"
export type AlbumArtworkProps = ComponentProps<'img'> & {
  isLoading?: boolean;
}

export default function AlbumArtwork(props: AlbumArtworkProps) {
  const {
    isLoading,
    ...imgProps
  } = props;

  return (
    <div {...imgProps} className="flex w-full aspect-square overflow-hidden rounded-md shadow-lg bg-gradient-to-b from-red-600 to-red-800">
      {isLoading ? <div className="w-full bg-opacity-50 bg-black" /> : ''}
    </div>
  )
}
