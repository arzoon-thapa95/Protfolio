"use client";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // const ref = React.useRef(null);
  return (
    <NextThemesProvider {...props}>
      {children}
      {/* <ToasterProvider /> */}
    </NextThemesProvider>
  );
}

export function ToasterProvider(): JSX.Element {
  const { resolvedTheme } = useTheme() as {
    resolvedTheme: "light" | "dark";
  };
  return (
    <Toaster
      position='bottom-right'
      richColors
      expand
      closeButton
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
