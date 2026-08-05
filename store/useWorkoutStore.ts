import { create } from "zustand";
import { WorkoutItem } from "@/types";

interface WorkoutState {
  workouts: WorkoutItem[];
  isLoading: boolean;
  setWorkouts: (workouts: WorkoutItem[]) => void;
  reset: () => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  workouts: [],
  isLoading: false,
  setWorkouts: (workouts) => set({ workouts }),
  reset: () => set({ workouts: [], isLoading: false }),
}));
