import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  console.log("Details Runing");
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDesc(data.desc);
      });
  }, []);

  return (
    <>
      <Container>
        <Card className="text-center">
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Title className="text-primary p-1 mb-3 border-bottom fs-1 ">
              {title}
            </Card.Title>
            <Card.Text className="fs-3 ">{desc}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Details;
