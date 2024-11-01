'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type HeaderProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderContext = createContext<HeaderProps | null>(null);

export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) throw new Error("useHeader must be used inside a HeaderProvider");

  return context;
}

export function HeaderProvider({ children }: { children?: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  const providerValue: HeaderProps = {
    isVisible,
    setIsVisible
  }

  return <HeaderContext.Provider value={providerValue}>
    {children}
  </HeaderContext.Provider>
}
