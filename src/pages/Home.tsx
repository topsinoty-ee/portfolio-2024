/** @format */

// import { useEffect } from 'react';
import { withNavbar } from '../Layout/withNavbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Project from '../sections/Projects';
import useSmoothScroll from '../hooks/useSmoothScrolling';

const Home = () => {
  useSmoothScroll();

  return (
    <main className="carousel carousel-vertical h-[90vh] w-full">
      <Hero />
      <About />
      <Project />
    </main>
  );
};

export default withNavbar(
  Home,
  "My portfolio's landing page. Welcome!",
  'Promise 😎 - Home'
);
