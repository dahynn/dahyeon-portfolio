'use client';

import { useEffect } from 'react';

export function PageSnap() {
  useEffect(() => {
    let locked = false;
    const pages = Array.from(document.querySelectorAll<HTMLElement>('[data-page]'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.65) {
          entry.target.classList.add('is-active');
        }
      });
    }, { threshold: [0.65] });

    pages.forEach((page) => observer.observe(page));

    const onWheel = (event: WheelEvent) => {
      if (window.matchMedia('(max-width: 760px)').matches) return;
      if (event.ctrlKey || event.deltaY === 0 || locked) return;
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
    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  return null;
}
