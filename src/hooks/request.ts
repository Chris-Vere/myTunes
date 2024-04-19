import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { Track } from "../types/types";

type BaseRequest<V> = () => Promise<V>;

type SuccessResponse<V> = {
  code: "success";
  data: V;
};

type ErrorResponse<E = Error> = {
  code: "error";
  error: E;
};

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;

const requestCache = new Map<string, []>();

const requestHandler = <V, E = Error>(request:BaseRequest<V>) => {
  return async ():BaseResponse<V, E> => {
    try {
      const response = await request();
      return {
        code: "success",
        data: response,
      }
    } catch(e) {
      return {
        code:"error",
        error: e as E,
      }
    }
  }
}

const makeRequest = <T>(path:string) => {
  return requestHandler<T>(async () => {
    if(requestCache.has(path)) {
      return requestCache.get(path);
    }

    const response = await fetch(`${BASE_URL}${path}`);
    if(response.ok) {
      const data = await response.json();
      requestCache.set(path, data);
      return data;
    }
    
    throw Error('API Error');
  });
}

const useTracks = (albumId: string | null) => {
  const [data, setData] = useState<Track[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function get() {
      if(albumId !== null) {
        setIsLoading(true);
        const request = makeRequest<Track[]>(`/albums/${albumId}/tracks`);
        const result = await request();

        if(result.code === 'success') {
          setData(result.data);
        } else {
          setError(result.error);
        }

        setIsLoading(false);
      } 
    }

    get();
  }, [albumId]);

  return {
    data,
    error,
    isLoading,
  }
};

export {
  useTracks,
}
