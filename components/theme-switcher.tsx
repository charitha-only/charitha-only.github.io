"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";

export type ColorTheme = "amber" | "emerald" | "violet" | "ice";

interface ThemeOption {
  id: ColorTheme;
  name: string;
  color: string;
  accentRgb: string;
}

export const THEMES: ThemeOption[] = [
  { id: "amber", name: "Amber Gold", color: "#d6ad7a", accentRgb: "214, 173, 122" },
  { id: "emerald", name: "Cyber Emerald", color: "#10b981", accentRgb: "16, 185, 129" },
  { id: "violet", name: "Electric Violet", color: "#a855f7", accentRgb: "168, 85, 247" },
  { id: "ice", name: "Titanium Ice", color: "#38bdf8", accentRgb: "56, 189, 248" }
];

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>("amber");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("malsanka-theme") as ColorTheme | null;
    if (saved && ["amber", "emerald", "violet", "ice"].includes(saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "amber");
    }
  }, []);

  const switchTheme = (themeId: ColorTheme) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("malsanka-theme", themeId);
  };

  if (!mounted) return null;

  return (
    <div className={`theme-switcher-pill ${className}`} aria-label="Color theme selector">
      <div className="theme-switcher-label">
        <Palette size={12} className="theme-icon" />
        <span className="theme-current-name">THEME</span>
      </div>

      <div className="theme-swatches">
        {THEMES.map((theme) => {
          const isActive = currentTheme === theme.id;
          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => switchTheme(theme.id)}
              className={`theme-swatch-btn ${isActive ? "active" : ""}`}
              title={`Switch to ${theme.name}`}
              aria-label={`Select ${theme.name} theme`}
            >
              <span
                className="theme-dot"
                style={{ backgroundColor: theme.color }}
              />
              {isActive && (
                <motion.span
                  layoutId="activeThemeRing"
                  className="theme-active-ring"
                  style={{ borderColor: theme.color }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
