import {create} from "zustand";

const useStore = create((set) => ({
  items: JSON.parse(localStorage.getItem("items")) || [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item }],
    })),
  deleteItem: (id) =>
    set((state) => {
      const newItems = [...state.items];
      newItems.filter((item) => item.id !== id)
      return { items: newItems };
    }),
}));

export default useStore;