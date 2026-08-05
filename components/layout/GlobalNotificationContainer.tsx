"use client";

import React from "react";

export function GlobalNotificationContainer() {
  return (
    <div
      id="global-notification-container"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Container for future toast & push notifications */}
    </div>
  );
}
