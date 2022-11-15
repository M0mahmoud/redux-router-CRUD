import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../state/postSlice";

const Edit = () => {
  console.log("Edit Runing");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.posts);
  const { id } = useParams();
  //
  useEffect(() => {
    console.log("EDITING");
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDesc(data.desc);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePost({ id, title, desc }));
    navigate("/");
  };
  return (
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
      <Button
        variant="primary"
        type="submit"
        className="center"
        disabled={loading ? true : false}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Edit;
