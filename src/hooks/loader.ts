import { RefObject, useEffect, useState } from "react"

type LoaderProps = {
  loaderRef: RefObject<HTMLElement>;
  isLoaded: boolean,
}

const useLoader = (props: LoaderProps) => {
  const {
    loaderRef,
    isLoaded,
  } = props;
  
  const [animationStatus, setAnimationStatus] = useState({
    inComplete: false,
    outComplete: false,
  });

  useEffect(() => {
    if(loaderRef.current) {
      const { classList } = loaderRef.current;
      const {inComplete, outComplete} = animationStatus;
      
      if(isLoaded) {
        if(inComplete) {
          classList.add('out');
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
  }, [loaderRef, animationStatus, isLoaded]);

  useEffect(() => {
    if(isLoaded && loaderRef.current) {
      const { classList } = loaderRef.current;

      if(classList.contains('in') && !classList.contains('out')) {
        // classList.add('out');
      }
    }
  }, [isLoaded, loaderRef]);

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
  };
}

export default useLoader;
