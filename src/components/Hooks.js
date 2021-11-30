import { useRef, useContext, useEffect, useState } from "react";
import { NavContext } from "./navigation/NavContext";

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: [0.25, 0.5, 0.75],
    }
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};

export const useNav = (navLinkId) => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};
