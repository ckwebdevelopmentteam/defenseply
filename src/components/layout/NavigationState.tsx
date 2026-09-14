"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
const NavigationContext = createContext<{
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
} | null>(null);
/** One scroll/menu state keeps the mobile header and quote banner in sync. */
export function NavigationProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    const desktop = window.matchMedia("(min-width: 1080px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("scroll", update);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{ scrolled, mobileOpen, setMobileOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}
export function useNavigationState() {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error("Header and FloatingActions require NavigationProvider.");
  return context;
}
