import styled from "styled-components"
import { Album, AlbumId, Track } from "../../../types/types";
import AlbumGridItem from "../AlbumGridItem/AlbumGridItem";
import { Fragment, useState } from "react";
import TrackWell from "../TrackWell/TrackWell";
import { useTracks } from "../../../hooks/request";

const StyledGrid = styled.div`
  display: grid;
  gap: var(--spacing-album-grid);
  padding: 0 var(--spacing-album-grid);
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
`;

const albums:Album[] = [
  {
    title: 'The Devil Put Dinosaurs Here',
    releaseDate: '2013',
    id: '5',
    artworkURL: 'The Devil Put Dinosaurs Here.jpg',
  },
  {
    title: 'Black Gives Way to Blue',
    releaseDate: '2009',
    id: 'Black Gives Way to Blue',
    artworkURL: 'Black Gives Way to Blue.jpg',
  },
  {
    title: 'MTV Unplugged (Live)',
    releaseDate: '1996',
    id: 'MTV Unplugged (Live)',
    artworkURL: 'MTV Unplugged (Live).jpg',
  },
  {
    title: 'Alice In Chains',
    releaseDate: '1995',
    id: 'Alice In Chains',
    artworkURL: 'Alice In Chains.jpg',
  },
  {
    title: 'Jar of Flies - EP',
    releaseDate: '1994',
    id: 'Jar of Flies - EP',
    artworkURL:  'Jar of Flies - EP.jpg',
  },
  {
    title: 'Dirt',
    releaseDate: '1992',
    id: 'Dirt',
    artworkURL: 'Dirt.jpg',
  },
  {
    title: 'Facelift',
    releaseDate: '1990',
    id: 'Facelift',
    artworkURL:  'Facelift.jpg',
  },
  {
    title: 'Alice In Chains',
    releaseDate: '1995',
    id: 'Alice In Chains',
    artworkURL: 'Alice In Chains.jpg',
  },
  {
    title: 'Jar of Flies - EP',
    releaseDate: '1994',
    id: 'Jar of Flies - EP',
    artworkURL:  'Jar of Flies - EP.jpg',
  },
  {
    title: 'Dirt',
    releaseDate: '1992',
    id: 'Dirt',
    artworkURL: 'Dirt.jpg',
  },
  {
    title: 'Facelift',
    releaseDate: '1990',
    id: 'Facelift',
    artworkURL:  'Facelift.jpg',
  },
];

const NUM_COLS = 4;

export default function AlbumGrid() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<AlbumId | null>(null);
  const [selectedAlbumPosition, setSelectedAlbumPosition] = useState<number | null>(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [showTrackWell, setShowTrackWell] = useState(false);

  const {
    data,
    error,
    isLoading,
  } = useTracks(selectedAlbumId);

  console.log('data', data);
  

  function onSelectedClick(id:AlbumId, index: number) {
    setSelectedAlbumId(id);
    const targetRow = Math.ceil((index + 1) / NUM_COLS);
    const targetPosition = NUM_COLS * targetRow - 1;

    let adjustedTargetPosition = Math.min(albums.length, targetPosition);
    if(adjustedTargetPosition === albums.length) {
      adjustedTargetPosition -= 1;
    }
    
    setShowTrackWell(true);
    setSelectedAlbumPosition(adjustedTargetPosition);
    setIndicatorPosition(index % NUM_COLS);
  }

  const selectedTitle = albums.find((album) => {
    if(selectedAlbumId) {
      return album.id === selectedAlbumId;
    }

    return false;
  })?.title;

  function closeWellHandler() {
    setShowTrackWell(false);
  }

  return (
    <StyledGrid className="album-grid">
      {
        albums.map((album, index) => (
          <Fragment key={`${album.id}-${index}`}>
            <AlbumGridItem
              onClick={onSelectedClick}
              album={album}
              uiPositionIndex={index}
              loading={album.id === selectedAlbumId && isLoading} />
            {
              selectedAlbumPosition === index && showTrackWell &&
              <TrackWell
                tracks={data}
                title={selectedTitle}
                position={indicatorPosition}
                onClose={closeWellHandler}
                isLoading={isLoading}
              >
                {error && <h2>Unable to load album data</h2>}
                {data && data.length === 0 && <h2>No track data found</h2>}
              </TrackWell>
            }
          </Fragment>
        ))
      }
    </StyledGrid>
  )
}
