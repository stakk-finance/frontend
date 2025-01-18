import { useHeader } from "@/hooks/useHeader";
import { Button } from "../ui/button";
import Starfield from "../common/StarField";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { setIsVisible } = useHeader();
  const [hyperSpace, setHyperSpace] = useState(false);

  const onMouseEnter = () => {
    setHyperSpace(true);
    setIsVisible(false);
  };

  const onMouseLeave = () => {
    setHyperSpace(false);
    setIsVisible(true);
  };

  return (
    <motion.div
      className="w-full h-full flex justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Starfield minHeight={400} starCount={1000} hyperSpace={hyperSpace} />
      <motion.div
        className="flex-1 min-h-mainSection max-w-xl flex flex-col justify-center items-center relative text-center space-y-content px-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <span className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-lg emboss-text">
          Maximize Your Yield with AI-Powered Staking
        </span>
        <span className="text-secondary max-w-sm text-xs md:text-sm lg:text-base">
          Benefit from intelligent risk management, airdrop farming, and
          participate in key governance of leading DeFi projects like JUP and
          BONK, all in one platform.
        </span>

        <div
          className="flex flex-row gap-4 items-center justify-center mt-8 relative z-50"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative group inline-block">
            <div
              className="absolute -inset-0.5 opacity-0 group-hover:opacity-60 rounded-xl blur-sm animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443]
              group-hover:-inset-1 group-hover:blur-lg transition duration-300 ease-in-out"
            />
            <Button
              className="relative z-50"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              Join Waitlist
            </Button>
          </div>
          <Button variant={"outline"} className="z-50">
            Launch App
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
