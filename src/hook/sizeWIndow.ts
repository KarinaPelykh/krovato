import { useEffect, useState } from "react";

export const sizeWindow = () => {
  const [size, setSize] = useState(window.innerWidth);
  const handleSizeWindow = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleSizeWindow);
    return () => {
      window.addEventListener("resize", handleSizeWindow);
    };
  }, []);

  return { size };
};
