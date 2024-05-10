import { Album, Artist, Track } from "../types/types";

export const BASE_URL = 'http://localhost:3000';

const ALBUM:Album = {
  id: '',
  title: '',
  artworkURL: '',
  releaseDate: '',
};

const ARTIST:Artist = {
  id: '',
  name: '',
  albums: [ALBUM],
};

const TRACK:Track = {
  albumName: '',
  artistName: '',
  duration: '',
  id: '',
  name: '',
  url: '',
};

const ARTISTS:Artist[] = [ARTIST];
const ALBUMS:Album[] = [ALBUM];
const TRACKS:Track[] = [TRACK];

export const PENDING_RESPONSES = {
  ALBUM,
  ALBUMS,
  ARTIST,
  ARTISTS,
  TRACK,
  TRACKS,
};
