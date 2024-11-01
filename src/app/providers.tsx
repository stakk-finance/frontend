import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { shadcnTheme } from "../../shadcn-theme";
import { HeaderProvider } from "@/hooks/useHeader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={shadcnTheme}>
      <HeaderProvider>
        {children}
      </HeaderProvider>
    </ThemeProvider>
  )
}
