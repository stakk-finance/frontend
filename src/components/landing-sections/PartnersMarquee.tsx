"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect } from "react";

const partners = [
  { name: "Partner 1", logo: "/images/bybit-logo-wide-dark.svg" },
  { name: "Partner 2", logo: "/images/jupiter-logo-wide-dark.svg" },
  { name: "Partner 3", logo: "/images/solana-logo-wide-dark.svg" },
  { name: "Partner 4", logo: "/images/bybit-logo-wide-dark.svg" },
  { name: "Partner 5", logo: "/images/jupiter-logo-wide-dark.svg" },
  { name: "Partner 6", logo: "/images/solana-logo-wide-dark.svg" },
  { name: "Partner 7", logo: "/images/jupiter-logo-wide-dark.svg" },
  { name: "Partner 8", logo: "/images/solana-logo-wide-dark.svg" },
];

export default function PartnersMarquee() {
  const { width } = useWindowSize();
  const controls = useAnimation();
  const baseDuration = 20;
  const mobileDuration = baseDuration * (width / 1200);

  useEffect(() => {
    controls.start({
      x: ["-100%", "0%"],
      transition: {
        ease: "linear",
        duration: mobileDuration,
        repeat: Infinity,
      },
    });
  }, [controls, mobileDuration]);
  return (
    <div className="w-full overflow-hidden border-t border-b border-border-light/20 bg-background/30 backdrop-blur-2xl py-6 relative z-30 mt-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-20 pointer-events-none" />
      <motion.div className="flex" animate={controls}>
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 flex items-center justify-center"
            style={{ width: "200px" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={50}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 relative z-10"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
