
import { create } from 'zustand';

type DynamicIslandStatus = 'success' | 'error';

interface DynamicIslandState {
  isVisible: boolean;
  message: string;
  status: DynamicIslandStatus;
  show: (payload: { message: string; status: DynamicIslandStatus }) => void;
  hide: () => void;
}

export const useDynamicIsland = create<DynamicIslandState>((set, get) => ({
  isVisible: false,
  message: '',
  status: 'success',
  show: ({ message, status }) => {
    set({ isVisible: true, message, status });
    setTimeout(() => {
      get().hide();
    }, 4000);
  },
  hide: () => set({ isVisible: false }),
}));
