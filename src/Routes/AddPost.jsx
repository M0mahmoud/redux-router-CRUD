import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPosts } from "../state/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.posts);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 900);
    dispatch(insertPosts({ id, title, desc }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
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
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Text className="text-muted">Post Title</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading ? true : false}>
        Submit
      </Button>
    </Form>
  );
};

export default AddPost;
