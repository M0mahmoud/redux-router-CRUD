import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    id: Number(Math.random()),
    isLoggedIn: true,
  },
  reducers: {},
});

export default userSlice.reducer;
