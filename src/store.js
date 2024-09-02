import {create} from "zustand";

const useStore = create((set) => ({
  items: JSON.parse(localStorage.getItem("items")) || [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item }],
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    })),
  decreaseItem: (item) =>
    set((state) => {
      let idx = state.items.findIndex(i => i.id === item.id);
      state.items.splice(idx, 1);
      return { items: [...state.items]};
    }),
}));

export default useStore;