import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("http://localhost:5000/posts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
