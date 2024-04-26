import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { Album, AlbumId, Artist, ArtistId, Track } from "../types/types";

const THROTTLE_REQUESTS = true;

type ParamsObject = Record<string, string>;
type Status = {
  isLoading: boolean;
  isLoaded: boolean;
  isCached: boolean;
}

const requestCache = new Map<string, unknown>();

function buildURL(path: string, params: ParamsObject) {
  const searchParams = new URLSearchParams(params);
  if(THROTTLE_REQUESTS){
    searchParams.append('throttle', 'true');
  }
  const paramsString = searchParams.toString();
  return new URL(`${BASE_URL}${path}${paramsString.length ? `?${paramsString}` : ''}`);
}

const useData = <T>(path: string, searchParams: ParamsObject = {}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<Status>({
    isLoaded: false,
    isLoading: false,
    isCached: false,
  });

  const url = buildURL(path, searchParams).toString();

  useEffect(() => {
    async function go() {
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

    go();
  }, [url]);

  return {
    data,
    error,
    status,
  };
}

const useArtists = () => {
  return useData<Artist[]>(`/artists`);
}

const useAlbumsByArtistId = (artistId: ArtistId) => {
  return useData<Album[]>(`/artists/${artistId}/albums`);  
}

const useTracksByAlbum = (albumId: AlbumId) => {
  return useData<Track[]>(`/albums/${albumId}/tracks`);
}

export {
  useTracksByAlbum,
  useArtists,
  useAlbumsByArtistId,
}
