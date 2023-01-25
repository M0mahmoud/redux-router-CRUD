import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../store/postSlice";

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return {
    loading,
    error,
    post,
  };
};

export default usePostDetails;
