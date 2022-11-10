import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { deletePost, fetchPosts } from "../state/postSlice";

import PostLists from "./PostLists";

const Index = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePosts = useCallback(
    (id) => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );
  return (
    <>
      <Loading loading={loading} error={error}>
        <PostLists data={data} deletePosts={deletePosts} />
      </Loading>
    </>
  );
};

export default Index;
