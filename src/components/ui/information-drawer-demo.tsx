"use client";

import InformationDrawer from "@/components/ui/information-drawer";

export default function InformationDrawerDemo() {
  return (
    <div className="h-screen w-full overflow-y-auto bg-background">
      <InformationDrawer
        title="The People Behind It"
        description="Five people, one studio. Tap a card to read who they are and what they actually work on."
        backgroundColor="#111111"
        textColor="#f5f5f5"
        sidebarWidth="55%"
        overlayOpacity={0.35}
      />
    </div>
  );
}
