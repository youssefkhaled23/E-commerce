import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customType/product/Product";
import axiosErrorHandler from "@util/axiosErrorHandler";
type TResponse = TProduct[] 

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix : string, thunkAPi) => {
    const { rejectWithValue ,signal } = thunkAPi;
    try {
      const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}` , {
        signal,
      });
      return response.data;
    } catch (error) {
      axiosErrorHandler(rejectWithValue(error))
    }
  }
);

export default actGetProducts
