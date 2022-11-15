import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./postSlice";
import authSlice from "./isAuth";

const store = configureStore({
  reducer: { posts: postSlice, auth: authSlice },
});

export default store;
