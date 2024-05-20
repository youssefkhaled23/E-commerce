import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategories } from "@customType/categories/Categories";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TResponse =  TCategories[] 

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPi) => {
    const { rejectWithValue ,signal } = thunkAPi;
    try {
      const response = await axios.get<TResponse>(`/category` , {
        signal , 
      });
      return response.data;
    } catch (error) {
      axiosErrorHandler(rejectWithValue(error))
    }
  }
);

export default actGetCategories
