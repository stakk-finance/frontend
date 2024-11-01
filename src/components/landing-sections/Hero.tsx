import { useHeader } from "@/hooks/useHeader";
import { Button } from "../ui/button";

export default function HeroSection() {
  const { setIsVisible } = useHeader();

  return (
    <div className="w-full flex justify-center items-center bg-background">
      <div className="flex-1 min-h-mainSection max-w-xl flex justify-center items-center">
        <Button onClick={() => setIsVisible(prev => !prev)}>
          Toggle Header
        </Button>
      </div>
    </div>
  );
}
