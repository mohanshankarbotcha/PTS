import { create } from "zustand";
import { AnalyticsMetric } from "@/types";

interface AnalyticsState {
  metrics: AnalyticsMetric[];
  isLoading: boolean;
  setMetrics: (metrics: AnalyticsMetric[]) => void;
  reset: () => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  metrics: [],
  isLoading: false,
  setMetrics: (metrics) => set({ metrics }),
  reset: () => set({ metrics: [], isLoading: false }),
}));
