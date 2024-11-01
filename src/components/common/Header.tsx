'use client'

import StakkLogoWide from "./LogoWide";
import { useHeader } from "@/hooks/useHeader";

export default function Header() {
  const { isVisible } = useHeader();

  return (
    <div className="w-full justify-center items-center flex">
      <div
        className={`transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[100px]"} min-h-header w-lg border-border-light border p-4 fixed top-4 rounded-2xl backdrop-blur-md bg-[#777880]/30`}
      >
        <StakkLogoWide />
      </div>
    </div>
  );
}
