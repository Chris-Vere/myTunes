import styled from "styled-components"
import { Album, AlbumId, Track } from "../../../types/types";
import AlbumGridItem from "../AlbumGridItem/AlbumGridItem";
import { Fragment, useState } from "react";
import TrackWell from "../TrackWell/TrackWell";

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
    id: 'The Devil Put Dinosaurs Here',
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

const tracks:Track[] = [
  {
    name: 'Hollow',
    duration: '5:41',
    id: 'Hollow',
  },
  {
    name: 'Pretty Done',
    duration: '4:36',
    id: 'Pretty Done',
  },
  {
    name: 'Stone',
    duration: '4:32',
    id: 'Stone',
  },
  {
    name: 'Voices',
    duration: '5:43',
    id: 'Voices',
  },
  {
    name: 'The Devil Put Dinosaurs Here',
    duration: '6:39',
    id: 'The Devil Put Dinosaurs Here',
  },
  {
    name: 'Lab Monkey',
    duration: '5:58',
    id: 'Lab Monkey',
  },
  {
    name: 'Low Ceiling',
    duration: '5:15',
    id: 'Low Ceiling',
  },
  {
    name: 'Breath on a Window',
    duration: '5:20',
    id: 'Breath on a Window',
  },
  {
    name: 'Scalpel',
    duration: '5:21',
    id: 'Scalpel',
  },
  {
    name: 'Phantom Limb',
    duration: '7:08',
    id: 'Phantom Limb',
  },
  {
    name: 'Hung on a Hook',
    duration: '5:35',
    id: 'Hung on a Hook',
  },
  {
    name: 'Choke',
    duration: '5:44',
    id: 'Choke',
  },
];

const NUM_COLS = 4;

export default function AlbumGrid() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<AlbumId | null>(null);
  const [selectedAlbumPosition, setSelectedAlbumPosition] = useState<number | null>(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [showTrackWell, setShowTrackWell] = useState(false);

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
            <AlbumGridItem onClick={onSelectedClick} album={album} uiPositionIndex={index} />
            {selectedAlbumPosition === index && showTrackWell && <TrackWell tracks={tracks} title={selectedTitle} position={indicatorPosition} onClose={closeWellHandler} />}
          </Fragment>
        ))
      }
    </StyledGrid>
  )
}
