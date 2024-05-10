export type ArtistId = string;
export type TrackId = string;
export type AlbumId = string;

export type Artist = {
  name: string;
  id: ArtistId;
  albums: {id: string}[];
}

export type EmptyArtist = Artist & Record<string, never>;

export type Album = {
  title: string,
  releaseDate: string,
  id: AlbumId,
  artworkURL: string,
}

export type EmptyAlbum = Album & Record<string, never>;
export interface Track {
  name: string,
  id: TrackId,
  duration: string,
  url: string,
  artistName: string,
  albumName: string,
}

export type EmptyTrack = Track & Record<string, never>;
