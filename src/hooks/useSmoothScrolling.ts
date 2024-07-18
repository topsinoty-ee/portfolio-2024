/** @format */

import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollToElement = (element: HTMLElement, inline?: string) => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: inline ? undefined : 'center',
        inline: inline ? 'center' : undefined,
      });
    };

    const handleSmoothScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const carouselItem = targetElement.closest('.carousel-item');
          const parentCarousel = carouselItem?.closest('.carousel');

          if (carouselItem && parentCarousel) {
            if (parentCarousel.classList.contains('carousel-vertical')) {
              // For vertical scroll
              scrollToElement(targetElement);
            } else {
              // For horizontal scroll
              scrollToElement(targetElement, 'center');
            }
          } else {
            // Default vertical scroll
            scrollToElement(targetElement);
          }
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

export default useSmoothScroll;
