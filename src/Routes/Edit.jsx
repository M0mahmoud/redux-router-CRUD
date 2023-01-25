import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import usePostDetails from "../hooks/usePostDetails";
import { cleanPost, updatePost } from "../store/postSlice";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { loading, error, post } = usePostDetails();

  useEffect(() => {
    if (post && !title && !desc) {
      setTitle(post.title);
      setDesc(post.desc);
    }
  }, [post]);

  useEffect(() => {
    return () => {
      dispatch(cleanPost());
    };
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();
    const item = { id: post.id, title, desc };
    dispatch(updatePost(item))
      .unwrap()
      .then(() => navigate("/"));
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Your Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Loading error={error} loading={loading}>
          <Button variant="primary" type="submit" className="center">
            Submit
          </Button>
        </Loading>
      </Form>
    </>
  );
};

export default Edit;
