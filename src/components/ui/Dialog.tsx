"use client";
import { useEffect, useRef, ReactNode } from "react";
/** Native modal provides focus containment, Escape dismissal, and focus restoration. */
export function Dialog({
  open,
  onClose,
  label,
  children,
  className = "",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      d.showModal();
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = old;
        d.close();
      };
    }
    d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={`m-auto max-h-[90dvh] max-w-[min(90vw,780px)] border-0 p-0 text-ink backdrop:bg-black/60 max-phone:max-w-[95vw] ${className}`}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {children}
    </dialog>
  );
}
