import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
  },
  name: "thisismycart",
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      // action.payload should be the id of the item to remove
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
