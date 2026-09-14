/** Join complete Tailwind class strings. Keep variants explicit so Tailwind can scan them. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
