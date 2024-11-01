'use client'

import { Button } from "../ui/button";
import StakkLogoWide from "./LogoWide";
import { useHeader } from "@/hooks/useHeader";

export default function Header() {
  const { isVisible } = useHeader();

  return (
    <div className="w-full justify-center items-center flex">
      <div
        className={`transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[100px]"} flex flex-row justify-between items-center min-h-header w-lg border-border-light border pl-4 p-2 fixed top-4 rounded-2xl backdrop-blur-md bg-white/[0.08]`}
      >
        <StakkLogoWide />
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-lg blur opacity-50 animate-gradient bg-gradient-to-r from-[#e96443] via-primary to-[#e96443]" />
          <Button className="relative bg-background">Launch App</Button>
        </div>
      </div>
    </div>
  );
}
