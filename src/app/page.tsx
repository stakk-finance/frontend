'use client';

import AppShowcaseSection from '@/components/landing-sections/AppShowcase';
import HeroSection from '@/components/landing-sections/Hero';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import bgHero from "../../public/backgrounds/bg-hero-home.png";
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();

  const updateWindowHeight = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    updateWindowHeight();
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, [updateWindowHeight]);

  const opacity = useTransform(scrollY, [0, windowHeight / 2], [1, 0]);
  const scale = useTransform(scrollY, [0, windowHeight], [1, 0.8]);

  return (
    <main className='flex flex-col justify-center items-center bg-noise'>
      <div className='z-0 fixed opacity-50 radial-bg top-0 w-full h-full' />
      <Image
        className="z-0 fixed opacity-20 h-full w-full top-0"
        src={bgHero}
        alt="bg-blur"
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <motion.div
        style={{
          opacity,
          scale,
          transformOrigin: 'center center',
          willChange: 'opacity, transform' // Hint to the browser for optimizations
        }}
        className="fixed top-0 left-0 w-full h-full z-10"
      >
        <HeroSection />
      </motion.div>
      <div className="relative z-20 w-full">
        <div style={{ height: '80vh' }} /> {/* Spacer */}
        <AppShowcaseSection />
      </div>
    </main>
  );
};

export default Home;
