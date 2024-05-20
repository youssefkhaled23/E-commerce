import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProduct } from "@customType/product/Product";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TResponse = TProduct[];
type TDataType = "ProductsFullinfo" | "ProductsIds"

const actCartItems = createAsyncThunk("cart/items", async (dataType : TDataType, thunkAPi) => {
  const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPi;
  const { cart } = getState() as RootState;
  const itemid = Object.keys(cart.items);
  if (!itemid.length) {
    return fulfillWithValue([]);
  }
  try {
    const itemIDConcat = itemid.map((e) => `id=${e}`).join(`&`);
    const response = await axios.get<TResponse>(`/products?${itemIDConcat}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    axiosErrorHandler(rejectWithValue(error));
  }
});

export default actCartItems;
