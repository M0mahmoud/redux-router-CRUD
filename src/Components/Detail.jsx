import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Detail = ({ postDetail, id }) => {
  console.log("Detail ", data);
  const { data } = useSelector((state) => state.posts);

  const showDetailhandler = () => {
    postDetail(id);
  };

  return (
    <Button onClick={showDetailhandler} className="mx-1" variant="primary">
      Details
    </Button>
  );
};

export default Detail;
