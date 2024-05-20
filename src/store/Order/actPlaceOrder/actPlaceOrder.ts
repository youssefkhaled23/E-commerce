import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";
import { RootState } from "@store/index";

const actPlaceOrder = createAsyncThunk(
  "order/actPlaceOrder",
  async (subTotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth, cart } = getState() as RootState;
    const orderItems = cart.ProductFullInfo.map((e) => {
      return {
        id: e.id,
        title: e.title,
        img: e.img,
        quantity: cart.items[e.id],
        price : e.price
      };
    });
    try {
      const response = await axios.post("/orders", {
        userId: auth.user?.id,
        items: orderItems,
        subTotal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;
