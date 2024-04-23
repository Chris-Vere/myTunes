import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { Track } from "../types/types";

const requestCache = new Map<string, unknown>();

function getCacheKey(path: string, searchParams: URLSearchParams) {
  const stringParams = searchParams.toString();
  return `${path}${stringParams.length ? `?${stringParams}` : ''}`;
}

const useData = <T>(path: string, params?: Record<string, string>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const searchParams = new URLSearchParams(params);
  const cacheKey = getCacheKey(path, searchParams);

  useEffect(() => {
    async function go() {
      if(requestCache.has(cacheKey)) {
        setIsLoading(false);
        setIsLoaded(true);
        setData(requestCache.get(cacheKey) as T);
      } else {
        try {
          const url = new URL(`${BASE_URL}${cacheKey}`);
          const response = await fetch(url);
          
          if(response.ok) {
            const data = await response.json();
            requestCache.set(cacheKey, data);
            setIsLoading(false);
            setIsLoaded(true);
            setData(data);
          }
        } catch (e) {
          setError(e as Error);
          setIsLoading(false);
        }
      }
    }
    go();
  }, [cacheKey]);

  return {
    data,
    error,
    isLoading,
    isLoaded,
  };
}

const useTracks = (albumId: string) => {
  return useData<Track[]>(`/albums/${albumId}/tracks`);
}

export {
  useTracks,
}
