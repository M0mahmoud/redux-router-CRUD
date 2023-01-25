import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import usePostDetails from "../hooks/usePostDetails";
import Loading from "../Components/Loading";
import { cleanPost } from "../store/postSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, post } = usePostDetails();

  useEffect(() => {
    return () => {
      dispatch(cleanPost());
    };
  }, [dispatch]);

  return (
    <>
      <Loading error={error} loading={loading}>
        <Container>
          <Card className="text-center">
            <Card.Header>Details</Card.Header>
            <Card.Body>
              <Card.Title className="text-primary p-1 mb-3 border-bottom fs-1 ">
                {post?.title}
              </Card.Title>
              <Card.Text className="fs-3 ">{post?.desc}</Card.Text>
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
      </Loading>
    </>
  );
};

export default Details;
