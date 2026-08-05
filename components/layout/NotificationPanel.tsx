"use client";

import React, { useState } from "react";
import { Bell, X, CheckCheck, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLACEHOLDER_NOTIFICATIONS = [
  {
    id: "1",
    title: "System Initialization Complete",
    description: "PTS Personal Operating System architecture is fully active.",
    time: "10m ago",
    unread: true,
    type: "system",
  },
  {
    id: "2",
    title: "Welcome to PTS Foundation",
    description: "All core stores, design tokens, and layout engines are online.",
    time: "1h ago",
    unread: true,
    type: "welcome",
  },
  {
    id: "3",
    title: "Theme Mode Persisted",
    description: "Your system theme selection is active across sessions.",
    time: "2h ago",
    unread: false,
    type: "setting",
  },
];

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [notifications, setNotifications] = useState(PLACEHOLDER_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => n.unread).length;
  const filteredList = notifications.filter((n) =>
    filter === "all" ? true : n.unread
  );

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* Slide-over panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-card border-l text-card-foreground shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Bell className="h-5 w-5 text-foreground" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </div>
                  <h2 className="font-display font-semibold text-lg tracking-tight">Notifications</h2>
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      {unreadCount} new
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMarkAllRead}
                    disabled={unreadCount === 0}
                    className="text-xs h-8 text-muted-foreground hover:text-foreground"
                    title="Mark all as read"
                  >
                    <CheckCheck className="h-4 w-4 mr-1" />
                    Mark Read
                  </Button>
                  <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close notifications">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="px-4 py-2 border-b bg-muted/20 flex gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    filter === "all"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter("unread")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    filter === "unread"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Unread ({unreadCount})
                </button>
              </div>

              {/* List Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground space-y-2">
                    <Sparkles className="h-8 w-8 text-muted-foreground/40 mb-2" />
                    <p className="text-sm font-medium">No notifications right now</p>
                    <p className="text-xs text-muted-foreground/70">
                      You&apos;re all caught up on system updates.
                    </p>
                  </div>
                ) : (
                  filteredList.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        item.unread
                          ? "bg-accent/5 border-accent/20 shadow-subtle"
                          : "bg-background/50 border-border/60 opacity-80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm leading-snug flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                          {item.title}
                        </span>
                        <span className="text-[11px] text-muted-foreground shrink-0 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                        {item.description}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t bg-muted/20 text-center text-[11px] text-muted-foreground">
                Notification Engine v1.0 • Web Push Infrastructure Ready
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
