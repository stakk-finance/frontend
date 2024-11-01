'use client'

import StakkLogoWide from "./LogoWide";
import { useHeader } from "@/hooks/useHeader";
import MagicButton from "./MagicButton";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const { isVisible } = useHeader();

  return (
    <div className="w-full justify-center items-center flex">
      <div
        className={`transition-transform duration-300 z-50 ${isVisible ? "translate-y-0" : "-translate-y-[100px]"} flex flex-row justify-between items-center min-h-header w-lg border-border-light border pl-4 p-2 fixed top-4 rounded-2xl backdrop-blur-md bg-white/[0.08]`}
      >
        <StakkLogoWide />
        <HeaderMenu />
        <MagicButton />
      </div>
    </div>
  );
}
