import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

import postSlice from "./postSlice";

const store = configureStore({
  reducer: { posts: postSlice, auth: authSlice },
});

export default store;
