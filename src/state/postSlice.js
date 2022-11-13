import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

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

// Fetch Post
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      const data = res.json();
      console.log("Feth data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

// Delete
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

// Insert Posts
export const insertPosts = createAsyncThunk(
  "posts/insertPosts",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    item.id = Number(Math.floor(Math.random() * 900));
    try {
      const response = await fetch(`http://localhost:5000/posts`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("Insert");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

// Update Post
export const updatePost = createAsyncThunk(
  "posts/update",
  async ({ id, title, desc }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: title,
          desc: desc,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      return { id, title, desc };
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
    //fetch Posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //fetch Post
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload; // Errror
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete Post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Insert Posts
    builder.addCase(insertPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(insertPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(insertPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Update Post
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
