"use client";

import React from "react";
import StakkLogo from "./Logo";
import { useRouter } from "next/navigation";

export default function StakkLogoWide() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <React.Fragment>
      <div
        onClick={handleLogoClick}
        className="cursor-pointer flex flex-row gap-1 items-center"
      >
        <div className="w-6 h-6 lg:w-8 lg:h-8">
          <StakkLogo />
        </div>
        <span className="font-bold md:text-lg">Stakk Finance</span>
      </div>
    </React.Fragment>
  );
}
