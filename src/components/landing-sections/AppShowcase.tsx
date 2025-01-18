"use client";

import AppShowcaseLayout from "./AppShowcaseSections/AppShowcaseLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AppShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section 
      ref={ref}
      className="w-full py-content"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="w-full lg:w-lg mx-auto rounded-xl border border-border-light/50 h-mainSection backdrop-blur bg-white/[0.08] flex items-center justify-center relative p-1">
        <AppShowcaseLayout />
      </div>
    </motion.section>
  );
}
