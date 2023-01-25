import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPosts } from "../store/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.posts);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    dispatch(insertPosts({ id, title, desc }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    // Clear
    setTitle("");
    setDesc("");
  };

  return (
    <Form onSubmit={submitHandler}>
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
        <Button
          variant="primary"
          type="submit"
          disabled={loading ? true : false}
        >
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default AddPost;
