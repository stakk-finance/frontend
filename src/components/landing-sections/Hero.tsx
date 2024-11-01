import { useHeader } from "@/hooks/useHeader";
import { Button } from "../ui/button";
import GridBackground from "../common/GridBackground";

export default function HeroSection() {
  const { setIsVisible } = useHeader();

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-[#141E30] to-background relative overflow-hidden">
      <GridBackground />
      <div className="flex-1 min-h-mainSection max-w-xl flex flex-col justify-center items-center relative text-center">
        <span className="text-6xl font-bold max-w-lg">
          Maximize Your Yield with AI-Powered Staking
        </span>
        <span className="text-secondary max-w-sm mt-4">
          Benefit from intelligent risk management, airdrop farming, and participate in key governance of leading DeFi projects like JUP and BONK, all in one platform.
        </span>
        <div className="relative group inline-block mt-8">
          <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 rounded-xl blur-sm animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443] 
              group-hover:-inset-1 group-hover:blur-lg transition duration-300 ease-in-out" />
          <Button className="relative" onClick={() => setIsVisible(prev => !prev)}>
            Toggle Header
          </Button>
        </div>
      </div>
    </div>
  );
}
