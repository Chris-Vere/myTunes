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

const useData = <T>(path: string, pendingResponse: T, searchParams: ParamsObject = {}) => {
  const [data, setData] = useState<T>(pendingResponse);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<{
    isLoading: boolean;
    isLoaded: boolean;
    isCached: boolean;
  }>({
    isLoaded: false,
    isLoading: false,
    isCached: false,
  });

  const url = buildURL(path, searchParams).toString();

  useEffect(() => {
    async function retrieve() {
      if(requestCache.has(url)) {
        setData(requestCache.get(url) as T);
        setStatus({
          isCached: true,
          isLoading: false,
          isLoaded: true,
        });
      } else {
        try {
          setStatus({
            isCached: false,
            isLoaded: false,
            isLoading: true,
          });          
          const response = await fetch(url);
          
          if(response.ok) {
            const data = await response.json();
            requestCache.set(url, data);
            setStatus((status) => ({
              ...status,
              isLoading: false,
              isLoaded: true,
            }));
            setData(data);
          }
        } catch (e) {
          setError(e as Error);
          setStatus((status) => ({
            ...status,
            isLoading: false,
            isLoaded: true,
          }));
        }
      }
    }

    retrieve();
  }, [url]);

  return {
    data,
    error,
    status,
  };
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
