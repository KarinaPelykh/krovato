import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  const toggle = () => setIsOpen(!isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "auto";
  return { isOpen, toggle, open, close };
};
