import { ComponentProps } from "react"
import styled from "styled-components";

export type AlbumArtworkProps = ComponentProps<'img'> & {
  isLoading?: boolean;
}

const Artwork = styled.div`
  display: flex;
  aspect-ratio: 1/1;
  width: 100%;
  border-radius: 6px;
  background-image: linear-gradient(var(--color-icon), var(--color-red));
  box-shadow: 0 0 10px hsl(0, 0%, 0%, 50%);
  overflow: hidden;
`;

const LoadingIcon = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function AlbumArtwork(props: AlbumArtworkProps) {
  const {
    isLoading = false,
    ...imgProps
  } = props;

  return (
    <Artwork {...imgProps}>
      {isLoading ? <LoadingIcon /> : ''}
    </Artwork>
  )
}
