import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";
import { RootState } from "@store/index";
import { orderList } from "@customType/order/order";

type TResponse = orderList[];

const actGetOrder = createAsyncThunk("orders/actOrder", async (_, thunkAPI) => {
  const { rejectWithValue, signal, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  try {
    const response = await axios.get<TResponse>(
      `/orders?userId=${auth.user?.id}`,
      { signal }
    );
    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});

export default actGetOrder