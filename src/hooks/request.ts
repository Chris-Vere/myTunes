import { useEffect, useState } from "react";
import { BASE_URL, PENDING_RESPONSES } from "../utils/constants";
import { Album, AlbumId, Artist, ArtistId, EmptyAlbum, EmptyArtist, EmptyTrack, Track } from "../types/types";

type ParamsObject = Record<string, string>;

const THROTTLE_REQUESTS = false;
const requestCache = new Map<string, unknown>();

function buildURL(path: string, params: ParamsObject) {
  const searchParams = new URLSearchParams(params);
  if(THROTTLE_REQUESTS){
    searchParams.append('throttle', 'true');
  }
  const paramsString = searchParams.toString();
  return new URL(`${BASE_URL}${path}${paramsString.length ? `?${paramsString}` : ''}`);
}

type InitalType<T> = {
  data: T;
  error: null;
  isLoading: false;
  isLoaded: false;
}

type LoadingType<T> = {
  isLoading: true;
  isLoaded: false;
  data: T;
  error: null;
}

type SuccessType<T> = {
  data: T;
  isLoading: false;
  isLoaded: true;
  error: null;
}

type ErrorType<T> = {
  error: Error;
  isLoading: false;
  data: T;
  isLoaded: true;
}

type RequestResponseType<T> = InitalType<T> | LoadingType<T> | SuccessType<T> | ErrorType<T>;

const useData = <T>(path: string, pendingResponse: T, searchParams: ParamsObject = {}) => {
  const [requestStatus, setRequestStatus] = useState<RequestResponseType<T>>({
    data: pendingResponse,
    isLoading: false,
    error: null,
    isLoaded: true,
  });

  const url = buildURL(path, searchParams).toString();

  useEffect(() => {
    async function retrieve() {
      if(requestCache.has(url)) {
        setRequestStatus({
          data: requestCache.get(url) as T,
          isLoaded: true,
          isLoading: false,
          error: null,
        });
      } else {
        try {
          setRequestStatus((s) => ({
            isLoading: true,
            isLoaded: false,
            data: s.data,
            error: null,
          }));
          
          const response = await fetch(url);
          
          if(response.ok) {
            const data = await response.json();
            requestCache.set(url, data);
            setRequestStatus({
              data,
              isLoaded: true,
              isLoading: false,
              error: null
            });
          }
        } catch (e) {
          setRequestStatus((s) => ({
            data: s.data,
            isLoaded: true,
            isLoading: false,
            error: e as Error,
          }));
        }
      }
    }

    retrieve();
  }, [url]);

  return requestStatus;
}

const {
  ALBUMS,
  ARTIST,
  ARTISTS,
  TRACKS,
} = PENDING_RESPONSES;

const useArtists = () => {
  return useData<Artist[] | EmptyArtist[]>('/artists', ARTISTS);
}

const useArtistById = (artistId: ArtistId) => {
  return useData<Artist | EmptyArtist>(`/artists/${artistId}`, ARTIST);
}

const useAlbumsByArtistId = (artistId: ArtistId) => {
  return useData<Album[] | EmptyAlbum[]>(`/artists/${artistId}/albums`, ALBUMS);
}

const useTracksByAlbum = (albumId: AlbumId) => {
  return useData<Track[] | EmptyTrack[]>(`/albums/${albumId}/tracks`, TRACKS);
}

export {
  useArtists,
  useArtistById,
  useTracksByAlbum,
  useAlbumsByArtistId,
}
