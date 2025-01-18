'use client';

import AppShowcaseSection from '@/components/landing-sections/AppShowcase';
import HeroSection from '@/components/landing-sections/Hero';
import PartnersMarquee from '@/components/landing-sections/PartnersMarquee';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import bgHero from "../../public/backgrounds/bg-hero-home.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import WhyStakkSection from '@/components/landing-sections/WhyStakkSection';

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
      <div className='z-0 fixed opacity-50 radial-bg top-0 w-full h-full pointer-events-none' />
      <Image
        className="z-0 fixed opacity-20 h-full w-full top-0 pointer-events-none"
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
          willChange: 'opacity, transform',
          zIndex: 30
        }}
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <HeroSection />
      </motion.div>

    <PartnersMarquee />

      {/* Rest of the content */}
      <div className='z-40 w-full'>
        <AppShowcaseSection />
        <WhyStakkSection />
      </div>
    </main>
  );
};

export default Home;
