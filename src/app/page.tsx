'use client';

import AppShowcaseSection from '@/components/landing-sections/AppShowcase';
import HeroSection from '@/components/landing-sections/Hero';
import React from 'react';
import Image from 'next/image';
import bgHero from "../../public/backgrounds/bg-hero-home.png";

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center bg-noise'>
      <Image
        className={"z-0 fixed opacity-50 h-full w-full top-0"}
        src={bgHero}
        alt={"bg-blur"}
        priority
      />
      <HeroSection />
      <AppShowcaseSection />
    </main>
  );
};

export default Home;
