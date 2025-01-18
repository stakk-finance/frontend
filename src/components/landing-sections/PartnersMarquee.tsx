'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Partner 1', logo: '/images/logo.png' },
  { name: 'Partner 2', logo: '/images/logo.png' },
  { name: 'Partner 3', logo: '/images/logo.png' },
  { name: 'Partner 4', logo: '/images/logo.png' },
  { name: 'Partner 5', logo: '/images/logo.png' },
  { name: 'Partner 6', logo: '/images/logo.png' },
  { name: 'Partner 7', logo: '/images/logo.png' },
  { name: 'Partner 8', logo: '/images/logo.png' },
];

export default function PartnersMarquee() {
  return (
    <div className="w-full overflow-hidden border-t border-b border-border-light/20 bg-background/30 backdrop-blur-2xl py-6 relative z-30 mt-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-20 pointer-events-none" />
      <motion.div
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 flex items-center justify-center"
            style={{ width: '200px' }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={partner.logo}
                alt={partner.name}
                width={50}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 relative z-10"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
