import { TLoading } from "@customType/share";
import { createSlice } from "@reduxjs/toolkit";
import { orderList } from "@customType/order/order";
import actPlaceOrder from "./actPlaceOrder/actPlaceOrder";
import actGetOrder from "@store/Order/actPlaceOrder/actGetOrder"
import { isString } from "../../type/Guards"

interface IOrderList {
  orderList: orderList[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderList = {
  orderList: [],
  loading: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.loading = "idle";
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // Place Order
    builder.addCase(actPlaceOrder.pending, (state) => {
      (state.loading = "pending"), (state.error = null);
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Get Order
    builder.addCase(actGetOrder.pending, (state) => {
      (state.error = null), (state.loading = "pending");
    });
    builder.addCase(actGetOrder.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(actGetOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actPlaceOrder, actGetOrder };
export const { resetOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
