'use client';
import { useEffect, useState } from 'react';

export function useMediaQuery() {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleOrientationChange = () => {
    setWidth(screen.width);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', handleOrientationChange);
    }
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return width <= 768;
}
