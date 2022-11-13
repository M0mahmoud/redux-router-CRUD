import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { deletePost, fetchPost, fetchPosts } from "../state/postSlice";

import PostLists from "./PostLists";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePosts = useCallback((id) => {
    dispatch(deletePost(id));
  }, []);

  const postDetail = useCallback((id) => {
    navigate(`post/${id}`);
  }, []);

  return (
    <>
      <Loading loading={loading} error={error}>
        <PostLists
          data={data}
          deletePosts={deletePosts}
          postDetail={postDetail}
        />
      </Loading>
    </>
  );
};

export default Index;
