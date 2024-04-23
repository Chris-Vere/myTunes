import { RefObject, useEffect, useState } from "react"

type LoaderProps<T> = {
  loaderRef: RefObject<HTMLElement>;
  isLoaded: boolean;
  data: T;
  defaultData: T;
}

const useLoader = <T>(props: LoaderProps<T>) => {
  const {
    loaderRef,
    isLoaded,
    data,
    defaultData,
  } = props;
  
  const [animationStatus, setAnimationStatus] = useState({
    inComplete: false,
    outComplete: false,
  });


  const [deferredData, setDeferredData] = useState<T>(defaultData);
  const [loadedAndUIReady, setLoadedAndUIReady] = useState(false);

  useEffect(() => {
    if(loaderRef.current) {
      const { classList } = loaderRef.current;
      const {inComplete, outComplete} = animationStatus;
      
      if(isLoaded) {
        if(inComplete) {
          classList.add('out');
          setDeferredData(data);
          setLoadedAndUIReady(true);
        }

        if(outComplete) {
          classList.remove('in', 'out');
          setAnimationStatus(() => ({
            inComplete: false,
            outComplete: false,
          }));
        }
      }
    }
  }, [loaderRef, animationStatus, isLoaded, data]);

  const handleAnimationEnd = (e:AnimationEvent) => {
    if(e.animationName === 'inAnimation') {
      setAnimationStatus((state) => ({
        ...state,
        inComplete: true,
      }));
    }

    if(e.animationName === 'outAnimation') {
      setAnimationStatus((state) => ({
        ...state,
        outComplete: true,
      }));
    }
  }

  if(loaderRef && loaderRef.current) {
    loaderRef.current.addEventListener('animationend', handleAnimationEnd);
  }

  function showLoader() {
    if(loaderRef.current) {
      loaderRef.current.classList.add('in');
    }
  }

  return {
    showLoader,
    deferredData,
    loadedAndUIReady,
  };
}

export default useLoader;
