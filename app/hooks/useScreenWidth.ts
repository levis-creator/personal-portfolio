import { useState, useEffect } from "react";

const useScreenWidth = (): number | undefined => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  useEffect(() => {
    // Exit early if window is not defined
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Set the initial screen width in case it was undefined
    setScreenWidth(window.innerWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenWidth;