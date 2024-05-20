import { TProduct } from "@customType/product/Product";
import { TLoading } from "@customType/share";
import { createSlice } from "@reduxjs/toolkit";
import actGetwishlist from "./act/actGetwishlist";
import actWishlist from "./act/actWishlist";
import { isString } from "../../type/Guards";
import { logOut } from "@store/auth/authSlice";
interface IWishlist {
  itemsId: number[];
  productsFullInfo: TProduct[];
  error: null | string;
  loading: TLoading;
}

const initialState: IWishlist = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlistProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actWishlist.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actWishlist.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productsFullInfo = state.productsFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });
    builder.addCase(actWishlist.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // get wishlist items
    builder.addCase(actGetwishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetwishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.dataType === "ProductsFullInfo") {
        state.productsFullInfo = action.payload.data as TProduct[];
      } else {
        state.itemsId = action.payload.data as number[];
      }
    });
    builder.addCase(actGetwishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Logout
    builder.addCase(logOut, (state) => {
      (state.productsFullInfo = []), (state.itemsId = []);
    });
  },
});

export { actWishlist, actGetwishlist };
export const { cleanWishlistProductsFullInfo } = wishlistSlice.actions;
export default wishlistSlice.reducer;
