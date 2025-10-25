"use client";

import { useCallback } from "react";

export default function SmoothScrollLink({ href, children, className }) {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 128; // Header (64px) + Navigation (64px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [href]);

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
