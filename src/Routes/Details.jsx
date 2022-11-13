import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../state/postSlice";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  console.log("data Detail", id);
  console.log("data Detail", data);
  return (
    <>
      <Container>
        <Card className="text-center">
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Title className="text-primary p-1 mb-3 border-bottom fs-1 ">
              {data.title}
            </Card.Title>
            <Card.Text className="fs-3 ">{data.desc}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Details;
