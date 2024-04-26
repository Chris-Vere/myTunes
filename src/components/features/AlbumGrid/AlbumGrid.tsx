import { Fragment, useState } from "react";
import styled from "styled-components"
import { AlbumId } from "../../../types/types";
import AlbumGridItem from "../AlbumGridItem/AlbumGridItem";
import TrackWell from "../TrackWell/TrackWell";
import { useParams } from "react-router-dom";
import { useAlbumsByArtistId } from "../../../hooks/request";

const StyledGrid = styled.div`
  display: grid;
  gap: var(--spacing-album-grid);
  padding: 0 var(--spacing-album-grid);
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
`;

const NUM_COLS = 4;

export default function AlbumGrid() {
  const { artistId } = useParams();
  const [openAlbumId, setOpenAlbumId] = useState<AlbumId>('-1');
  const [openAlbumUiIndex, setOpenAlbumUiIndex] = useState(-1);
  const { data: albumData = [] } = useAlbumsByArtistId(artistId!);

  /*
  const loaderRef = useRef<HTMLDivElement>(null);

  const {
    showLoader,
    deferredData,
    loadedAndUIReady,
  } = useLoader({
    loaderRef,
    isLoaded: dataIsLoaded,
    data: albumData,
    defaultData: [],
  });
  */

  function onSelectedClick(id:AlbumId, index: number) {
    // showLoader();
    setOpenAlbumId(id);
    setOpenAlbumUiIndex(index);
  }

  function initTrackWellPosition() {
    let selectedAlbumUiIndex = -1;
    let indicatorPosition = 0;

    if(openAlbumId){
      const targetRow = Math.ceil((openAlbumUiIndex + 1) / NUM_COLS);
      const targetPosition = NUM_COLS * targetRow - 1;
      
      let adjustedTargetPosition = Math.min(albumData.length, targetPosition);
      if(adjustedTargetPosition === albumData.length) {
        adjustedTargetPosition -= 1;
      }

      selectedAlbumUiIndex = adjustedTargetPosition;
      indicatorPosition = openAlbumUiIndex % NUM_COLS;
    }

    return {
      selectedAlbumUiIndex,
      indicatorPosition,
    }
  }

  const {
    selectedAlbumUiIndex,
    indicatorPosition,
  } = initTrackWellPosition();

  function getTrackWell(uiIndex: number) {
    if(uiIndex === selectedAlbumUiIndex) {
      const album = albumData.find(album => album.id === openAlbumId);
      return album ? <TrackWell album={album} indicatorPosition={indicatorPosition} /> : null;
    }

    return null;
  }

  return (
    <StyledGrid className="album-grid">
      {
        albumData.map((album, index) => (
          <Fragment key={`${album.id}-${index}`}>
            <AlbumGridItem
              album={album}
              uiPositionIndex={index}
              onClick={onSelectedClick}
              />
            { getTrackWell(index) }
          </Fragment>
        ))
      }
    </StyledGrid>
  )
}
