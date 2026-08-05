export type ThemeMode = "light" | "dark" | "system";

export interface UserProfile {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface TaskItem {
  id: string;
  userId: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface WorkoutItem {
  id: string;
  userId: string;
  title: string;
  type: string;
  duration?: number | null;
  calories?: number | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface NoteItem {
  id: string;
  userId: string;
  title: string;
  content: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ReminderItem {
  id: string;
  userId: string;
  title: string;
  scheduledAt: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GoalItem {
  id: string;
  userId: string;
  title: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AnalyticsMetric {
  id: string;
  userId: string;
  metricKey: string;
  metricValue: number;
  recordedAt: string;
}
