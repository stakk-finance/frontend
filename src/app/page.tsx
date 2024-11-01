'use client';

import AppShowcaseSection from '@/components/landing-sections/AppShowcase';
import HeroSection from '@/components/landing-sections/Hero';
import React from 'react';

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <HeroSection />
      <AppShowcaseSection />
    </main>
  );
};

export default Home;
