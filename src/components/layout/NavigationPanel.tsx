"use client";
import { useState } from "react";
import panels from "@/data/menu-panels.json";
import { ArrowIcon } from "@/components/ui/ActionLink";
import { cn } from "@/lib/cn";
export type MenuPanelId = keyof typeof panels;
export function hasMenuPanel(id: string): id is MenuPanelId {
  return id in panels;
}
export function NavigationPanel({
  id,
  mobile = false,
}: {
  id: MenuPanelId;
  mobile?: boolean;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "relative flex min-h-[254px] w-full items-stretch overflow-hidden",
        mobile && "block min-h-0 p-6",
      )}
    >
      {panels[id].columns.map((column, i) => (
        <div
          key={i}
          className={cn(
            "flex",
            mobile
              ? "mb-6 block"
              : column.layout === "intro"
                ? "flex-col justify-between border-r border-ink pr-15 max-[1480px]:pr-5"
                : column.layout === "wide"
                  ? "flex-1 gap-6 px-4"
                  : "gap-20 pl-15 max-[1480px]:gap-10 max-[1480px]:pl-5",
          )}
        >
          {column.groups.map((group) => (
            <div
              key={group.title}
              className={cn(
                !mobile && column.layout === "wide" && "flex gap-6",
              )}
            >
              <h3
                className={cn(
                  "mb-6 text-xs font-normal uppercase text-muted",
                  mobile && "mt-5 mb-4",
                  !mobile && column.layout === "wide" && "w-[102px] shrink-0",
                )}
              >
                {group.title}
              </h3>
              <ul
                className={cn(
                  "flex flex-col items-start",
                  !mobile && "max-h-[255px] overflow-y-auto thin-scrollbar",
                )}
              >
                {group.items.map((item) => (
                  <li key={item.label} className={cn(!mobile && "h-5")}>
                    <a
                      href="#"
                      className={cn(
                        "block text-line transition-colors hover:text-white",
                        mobile
                          ? "py-1.5 text-base"
                          : "whitespace-nowrap text-[13px]",
                        column.layout === "intro" && !mobile && "font-light",
                      )}
                      onMouseEnter={() => setPreview(item.image || null)}
                      onFocus={() => setPreview(item.image || null)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {"action" in column && column.action && (
            <a
              href="#"
              className={cn(
                "mt-auto flex h-[42px] w-[180px] items-center justify-between bg-white px-4 text-[13px] text-ink",
                mobile && "mt-6 h-auto w-full p-3 text-base",
              )}
            >
              {column.action}
              <ArrowIcon className="size-4" />
            </a>
          )}
        </div>
      ))}
      {!mobile && preview && (
        <div className="ml-auto w-[25%] shrink-0 pl-8">
          <img
            className="size-full max-h-[254px] object-cover"
            src={preview}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
