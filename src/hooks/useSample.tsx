// From DJ: This is a sample hook template so that we can be consistent

import React, { createContext, useContext } from "react";

const SampleContext = createContext(null);

export function useSample() {
  const context = useContext(SampleContext);

  if (!context)
    throw new Error("useSample must be used within a SampleProvider");

  return context;
}

/*
 * We put this inside the Providers.tsx component, which is located inside src/app
 */
export function SampleProvider({ children }: { children: React.ReactNode }) {
  return (
    <SampleContext.Provider value={null}>{children}</SampleContext.Provider>
  );
}
