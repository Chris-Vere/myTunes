export type ArtistId = string;
export type TrackId = string;
export type AlbumId = string;

export type Artist = {
  name: string;
  id: ArtistId;
}

export type Album = {
  title: string,
  releaseDate: string,
  id: AlbumId,
  artworkURL: string,
}

export interface Track {
  name: string,
  id: TrackId,
  duration: string,
}
