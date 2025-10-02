import { useEffect } from "react";

export const useImagePreloader = (imageSrcs) => {
  useEffect(() => {
    imageSrcs.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [imageSrcs]);
};
