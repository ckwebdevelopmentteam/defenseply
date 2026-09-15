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

      setScrolled(currentScrollY > 40);

      // Keep navbar visible near the top of the page
      if (currentScrollY <= 60) {
        setVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;
        if (diff > 8) {
          // Scrolling down - hide navbar slowly
          setVisible(false);
        } else if (diff < -8) {
          // Scrolling up - show navbar
          setVisible(true);
        }
      }

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
      <div
        className={
          scrolled && !mobileOpen
            ? "contents [--mobile-nav-height:48px]"
            : "contents [--mobile-nav-height:90px] max-phone:[--mobile-nav-height:68px]"
        }
      >
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
