import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // 새 제품을 장바구니에 추가
    },
  },
});

export const { addToCart } = reducer.actions;
export const selectCart = (state) => state.cart;
export default reducer.reducer;
