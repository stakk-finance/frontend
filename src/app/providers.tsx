import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { shadcnTheme } from "../../shadcn-theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={shadcnTheme}>
      {children}
    </ThemeProvider>
  )
}
