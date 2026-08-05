export interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  data?: Record<string, any>;
}

export class BrowserNotificationManager {
  static async requestPermission(): Promise<NotificationPermission> {
    if (typeof window === "undefined" || !("Notification" in window)) {
      return "denied";
    }
    return await Notification.requestPermission();
  }

  static async sendNotification(payload: NotificationPayload): Promise<boolean> {
    if (typeof window === "undefined" || !("Notification" in window)) {
      return false;
    }

    if (Notification.permission === "granted") {
      new Notification(payload.title, {
        body: payload.body,
        icon: payload.icon || "/icons/icon-192.png",
        badge: payload.badge || "/icons/badge-72.png",
        data: payload.data,
      });
      return true;
    }

    return false;
  }
}
