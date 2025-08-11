import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export function useActiveSection() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    setActiveSection(location);
  }, [location]);

  return activeSection;
}

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
