import React from "react";
import { Button } from "react-bootstrap";

const Detail = ({ postDetail , id}) => {
  const showDetailhandler = () => {
    postDetail(id)
  };

  return (
    <Button
      onClick={showDetailhandler}
      className="mx-1"
      variant="primary"
    >
      Details
    </Button>
  );
};

export default Detail;
