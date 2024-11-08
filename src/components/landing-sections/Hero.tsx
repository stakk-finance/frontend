import { useHeader } from "@/hooks/useHeader";
import { Button } from "../ui/button";
import GridBackground from "../common/GridBackground";

export default function HeroSection() {
  const { setIsVisible } = useHeader();

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
      <GridBackground />
      <div className="flex-1 min-h-mainSection max-w-xl flex flex-col justify-center items-center relative text-center">
        <span className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-lg px-6 emboss-text">
          Maximize Your Yield with AI-Powered Staking
        </span>
        <span className="text-secondary max-w-sm px-6 lg:px-0 mt-4 text-xs md:text-sm lg:text-base">
          Benefit from intelligent risk management, airdrop farming, and participate in key governance of leading DeFi projects like JUP and BONK, all in one platform.
        </span>

        <div className="flex flex-row gap-4 items-center justify-center mt-8">
          <div className="relative group inline-block">
            <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 rounded-xl blur-sm animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443] 
              group-hover:-inset-1 group-hover:blur-lg transition duration-300 ease-in-out" />
            <Button
              className="relative z-50"
              onClick={() => setIsVisible(prev => !prev)}
              style={{ pointerEvents: 'auto' }}
            >
              Join Waitlist
            </Button>
          </div>
          <Button
            variant={"outline"}
            className="z-50"
            style={{ pointerEvents: 'auto' }}
          >
            Launch App
          </Button>
        </div>
      </div>
    </div>
  );
}
