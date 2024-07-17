/** @format */

// import { useEffect } from 'react';
import { withNavbar } from '../Layout/withNavbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Project from '../sections/Projects';

const Home = () => {
  // useEffect(() => {
  //   alert('This page is a work in progress!');
  // }, []);

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
