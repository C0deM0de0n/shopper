import { useEffect, useState, useRef, useCallback } from "react";

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (!cartRef.current) return;

    const rect = cartRef.current.getBoundingClientRect();

    if (rect.top < 0 && !isScrolled) {
      setIsScrolled(true);
    }

    if (rect.top >= 0 && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled, cartRef }
};
