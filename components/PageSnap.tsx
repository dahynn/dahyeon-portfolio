'use client';

import { useEffect } from 'react';

export function PageSnap() {
  useEffect(() => {
    let locked = false;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.deltaY === 0 || locked) return;
      const pages = Array.from(document.querySelectorAll<HTMLElement>('[data-page]'));
      if (pages.length === 0) return;

      event.preventDefault();
      const currentIndex = pages.reduce((closestIndex, page, index) => {
        const closestDistance = Math.abs(pages[closestIndex].getBoundingClientRect().top);
        const distance = Math.abs(page.getBoundingClientRect().top);
        return distance < closestDistance ? index : closestIndex;
      }, 0);
      const nextIndex = Math.min(Math.max(currentIndex + (event.deltaY > 0 ? 1 : -1), 0), pages.length - 1);
      if (nextIndex === currentIndex) return;

      locked = true;
      pages[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => { locked = false; }, 650);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return null;
}
