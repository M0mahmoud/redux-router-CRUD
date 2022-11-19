import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deletePost, fetchPosts } from "../state/postSlice";

import PostLists from "./PostLists";
import Loading from "../Components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePosts = useCallback((id) => {
    dispatch(deletePost(id));
  }, []);

  return (
    <>
      <Loading>
        <PostLists data={data} deletePosts={deletePosts} />
      </Loading>
    </>
  );
};

export default Index;
