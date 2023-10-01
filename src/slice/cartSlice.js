import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: ["Banana", "Apples", "Grapses"],
  },
  name: "cart",
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state) => {
      state.items = state.items.slice(-1);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
