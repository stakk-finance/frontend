'use client'

import React from "react";
import StakkLogo from "./Logo";
import { useRouter } from "next/navigation";

export default function StakkLogoWide() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  }

  return (
    <React.Fragment>
      <div onClick={handleLogoClick} className="cursor-pointer flex flex-row gap-1 items-center">
        <div>
          <StakkLogo size={28} />
        </div>
        <span className="font-bold text-lg">Stakk Finance</span>
      </div>
    </React.Fragment>
  );
}
