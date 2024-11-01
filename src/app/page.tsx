'use client';

import HeroSection from '@/components/landing-sections/Hero';
import React from 'react';

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <HeroSection />
      <div className='min-h-screen'>
      </div>
    </main>
  );
};

export default Home;
