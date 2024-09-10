"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import {
  MuonBrain,
  GhubIcon,
  XIcon,
  MuonBrainW,
  GhubIconW,
  XIconW,
  SubstIcon,
  SubstIconW,
  in_bl,
  in_w,
} from "@/components/myicons";

const iconMap = {
  muonBrain: { light: MuonBrain, dark: MuonBrainW },
  github: { light: GhubIcon, dark: GhubIconW },
  twitter: { light: XIcon, dark: XIconW },
  substack: { light: SubstIcon, dark: SubstIconW },
  linkedin: { light: in_bl, dark: in_w },
};

export type IconType = keyof typeof iconMap;

interface ThemeAwareIconProps {
  icon: IconType;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ThemeAwareIcon: React.FC<ThemeAwareIconProps> = ({
  icon,
  alt,
  width = 28,
  height = 28,
  className = "w-7 h-7",
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeType = resolvedTheme === "dark" ? "dark" : "light";
  const IconComponent = iconMap[icon]?.[themeType];

  if (!IconComponent) {
    console.error(
      `Icon component not found for ${icon} in ${resolvedTheme} theme.`,
    );
    return null;
  }

  // Cast IconComponent to any to bypass type checking if necessary
  const Icon = IconComponent as React.ComponentType<any>;

  return (
    <Icon
      alt={alt as any}
      width={width as any}
      height={height as any}
      className={className as any}
    />
  );
};
