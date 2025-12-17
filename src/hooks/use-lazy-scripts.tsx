import { useEffect, useState, useRef } from 'react';

export const useLazyScripts = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const detectHeroLoad = () => {
      setTimeout(() => {
        const heroSection = document.querySelector('section[class*="min-h-screen"]');
        
        if (heroSection) {
          observerRef.current = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                  setHeroLoaded(true);
                  if (observerRef.current) {
                    observerRef.current.disconnect();
                  }
                }
              });
            },
            {
              threshold: 0.1,
              rootMargin: '0px 0px -10% 0px'
            }
          );

          observerRef.current.observe(heroSection);
        } else {
          setTimeout(() => setHeroLoaded(true), 2000);
        }
      }, 500);
    };

    detectHeroLoad();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { heroLoaded };
};
