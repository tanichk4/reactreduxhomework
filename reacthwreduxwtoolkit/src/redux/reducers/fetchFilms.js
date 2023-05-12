import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (arg, thunkAPI) => {
    //робота з асинхр. кодом
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/cinema.json?key=778301b0"
      );
      const json = await response.json();
      return json;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
