import { useState, useEffect, useRef, useCallback } from "react";
import { TypeReferenceType } from "typescript";

const useInfiniteScroll = (targetEl: any, ssr: boolean | null = false) => {
  const observerRef = useRef(null);
  const isFirstRender = useRef(!ssr);
  const [isIntersecting, setIntersecting] = useState(null);
  const [loadFinished, setLoadFinished] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      //@ts-ignore
      observerRef.current = new IntersectionObserver((entries) => {
        const intersecting = entries.some((entry) => entry.isIntersecting);
        if (isFirstRender.current && intersecting) {
          isFirstRender.current = false;
          return;
        }
        //@ts-ignore
        setIntersecting(intersecting);
      });
    }
    return observerRef.current;
  }, [observerRef.current]);

  const stopObserving = useCallback(() => {
    //@ts-ignore
    getObserver().disconnect();
  }, []);

  useEffect(() => {
    //@ts-ignore
    if (targetEl.current) getObserver().observe(targetEl.current);
    return stopObserving;
    //@ts-ignore
  }, [targetEl.current]);

  useEffect(() => {
    if (loadFinished) stopObserving();
  }, [loadFinished]);

  return [isIntersecting, loadFinished, setLoadFinished];
};

export default useInfiniteScroll;
