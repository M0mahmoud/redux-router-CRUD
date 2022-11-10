import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postAction } from "../state/postSlice";

import PostLists from "./PostLists";

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  console.log(posts); // return undefined 🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢

  useEffect(() => {
    dispatch(fetchPosts());
  });

  return <>{/* <PostLists /> */}</>;
};

export default Index;
