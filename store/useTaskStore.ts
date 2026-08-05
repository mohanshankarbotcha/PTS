import { create } from "zustand";
import { TaskItem } from "@/types";

interface TaskState {
  tasks: TaskItem[];
  isLoading: boolean;
  setTasks: (tasks: TaskItem[]) => void;
  reset: () => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  setTasks: (tasks) => set({ tasks }),
  reset: () => set({ tasks: [], isLoading: false }),
}));
