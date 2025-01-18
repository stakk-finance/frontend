"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function PartnersSection({ id }: { id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const partners = [
    {
      name: "Catoff",
      logo: "/images/Catoff.png",
      description:
        "Trusted by leading financial institutions for secure transactions",
    },
    {
      name: "Localcoins",
      logo: "/images/Localcoins.jpg",
      description: "Preferred exchange for seamless crypto transactions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className="w-full py-32 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-content">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-primary"
          variants={itemVariants}
        >
          Our Partners
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group perspective-1000"
            >
              <Card
                className={cn(
                  "h-full border-border-light/30 bg-card/80 hover:bg-background-darker/80",
                  "cursor-pointer transition-all duration-300",
                  "bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl",
                  "overflow-hidden relative group-hover:shadow-lg group-hover:shadow-primary/10",
                )}
              >
                <div className="absolute inset-0 rounded-2xl border border-border/20 pointer-events-none" />
                <CardHeader className="pb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-cover rounded-full"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-secondary text-base leading-relaxed">
                    {partner.description}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
