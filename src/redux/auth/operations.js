import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../../config/goItApi";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await goItApi.post("/users/signup", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
