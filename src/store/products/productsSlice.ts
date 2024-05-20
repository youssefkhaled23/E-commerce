import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { TLoading } from "@customType/share";
import { TProduct } from "@customType/product/Product";
import { isString } from "../../type/Guards";
interface IProducts {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProducts = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    prodcutscleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export const { prodcutscleanUp } = productsSlice.actions
export { actGetProducts };
export default productsSlice.reducer;
