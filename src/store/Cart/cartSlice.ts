import { TProduct } from "@customType/product/Product";
import { TLoading } from "@customType/share";
import { createSlice } from "@reduxjs/toolkit";
import { cartTotalQuantity } from "@store/Selectories";
import actCartItems from "./act/actCartItems";
import { isString } from "../../type/Guards";
interface ICartState {
  items: { [key: string]: number };
  ProductFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: ICartState = {
  items: {},
  ProductFullInfo: [],
  loading: "idle",
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    changeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    removeItems: (state, action) => {
      delete state.items[action.payload];
      state.ProductFullInfo = state.ProductFullInfo.filter(
        (e) => e.id !== action.payload
      );
    },
    ProductFullInfoCartCleanUp: (state) => {
      state.ProductFullInfo = [];
    },
    clearCartAfterPlaceOrder: (state) => {
      (state.items = {}), (state.ProductFullInfo = []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actCartItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actCartItems.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actCartItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.ProductFullInfo = action.payload;
    });
  },
});
export { cartTotalQuantity };
export const {
  addToCart,
  changeQuantity,
  removeItems,
  ProductFullInfoCartCleanUp,
  clearCartAfterPlaceOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
