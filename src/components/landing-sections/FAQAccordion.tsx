"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border-light/20 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-background-darker/20 transition-colors"
          >
            <span className="text-lg font-medium text-primary">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary transition-transform",
                activeIndex === index ? "rotate-180" : "rotate-0",
              )}
            />
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-secondary">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
