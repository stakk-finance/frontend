"use client";

import StakkLogoWide from "./LogoWide";
import { useHeader } from "@/hooks/useHeader";
import MagicButton from "./MagicButton";
import HeaderMenu from "@/components/common/HeaderMenu";

export default function Header() {
  const { isVisible } = useHeader();

  return (
    <div className="w-full justify-center items-center flex">
      <div className="w-full lg:w-lg fixed top-4 px-4 z-[999]">
        <div
          className={`transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-[100px]"
          } flex flex-row justify-between items-center min-h-header border-border-light/50 border pl-4 p-2 rounded-2xl backdrop-blur-md bg-white/[0.08]`}
        >
          <StakkLogoWide />
          <HeaderMenu />
          <div className="hidden md:block">
            <MagicButton />
          </div>
        </div>
      </div>
    </div>
  );
}
