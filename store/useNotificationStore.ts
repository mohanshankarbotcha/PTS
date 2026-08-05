import { create } from "zustand";
import { ReminderItem } from "@/types";

interface NotificationState {
  reminders: ReminderItem[];
  unreadCount: number;
  setReminders: (reminders: ReminderItem[]) => void;
  reset: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  reminders: [],
  unreadCount: 0,
  setReminders: (reminders) =>
    set({
      reminders,
      unreadCount: reminders.filter((r) => !r.isRead).length,
    }),
  reset: () => set({ reminders: [], unreadCount: 0 }),
}));
