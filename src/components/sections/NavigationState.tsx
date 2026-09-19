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
  visible: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
} | null>(null);
/** One scroll/menu state keeps the mobile header and quote banner in sync. */
export function NavigationProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);
      setVisible(true);

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const desktop = window.matchMedia("(min-width: 1080px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{ scrolled, visible, mobileOpen, setMobileOpen }}>
      <div className="contents [--mobile-nav-height:48px]">
        {children}
      </div>
    </NavigationContext.Provider>
  );
}
export function useNavigationState() {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error("Header and FloatingActions require NavigationProvider.");
  return context;
}
