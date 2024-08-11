"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<any>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
