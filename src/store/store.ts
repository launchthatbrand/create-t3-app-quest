/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// store.js

import { create } from "zustand";

interface SidebarState {
  isSidebarActive: boolean;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarActive: false,
  toggleSidebar: () =>
    set((state) => {
      console.log(
        "Toggling sidebar. Current state:",
        state.isSidebarActive,
        "New state:",
        !state.isSidebarActive,
      );
      return { isSidebarActive: !state.isSidebarActive };
    }),
}));

export default useSidebarStore;
