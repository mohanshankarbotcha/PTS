import { create } from "zustand";
import { NoteItem } from "@/types";

interface NoteState {
  notes: NoteItem[];
  isLoading: boolean;
  setNotes: (notes: NoteItem[]) => void;
  reset: () => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  notes: [],
  isLoading: false,
  setNotes: (notes) => set({ notes }),
  reset: () => set({ notes: [], isLoading: false }),
}));
