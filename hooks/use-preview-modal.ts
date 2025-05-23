import { create } from "zustand";
import { Event } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Event;
  onOpen: (data: Event) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Event) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
