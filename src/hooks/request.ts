import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { Album, AlbumId, Artist, ArtistId, Track } from "../types/types";

const requestCache = new Map<string, unknown>();

type ParamsObject = Record<string, string>;

function buildURL(path: string, params: ParamsObject) {
  const searchParams = new URLSearchParams(params);
  searchParams.append('throttle', 'true');
  const paramsString = params.toString();
  return new URL(`${BASE_URL}${path}${paramsString.length ? `?${paramsString}` : ''}`);
}

const useData = <T>(path: string, searchParams: ParamsObject = {}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCached, setIsCached] = useState(false);

  const url = buildURL(path, searchParams).toString();

  useEffect(() => {
    async function go() {
      if(requestCache.has(url)) {
        setIsCached(true);
        setData(requestCache.get(url) as T);
        setIsLoading(false);
        setIsLoaded(true);
      } else {
        try {
          setIsCached(false);
          setIsLoading(true);
          setIsLoaded(false);
          const response = await fetch(url);
          
          if(response.ok) {
            const data = await response.json();
            requestCache.set(url, data);
            setIsLoading(false);
            setIsLoaded(true);
            setData(data);
          }
        } catch (e) {
          setError(e as Error);
          setIsLoading(false);
          setIsLoaded(true);
        }
      }
    }

    go();
  }, [url]);

  return {
    data,
    error,
    isLoading,
    isLoaded,
    isCached,
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
