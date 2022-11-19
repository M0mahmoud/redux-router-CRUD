import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostListItem = ({ data, deletePosts }) => {
  console.log("PostListItem Runing");
  const navigate = useNavigate();

  const deleteHandler = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePosts(item.id);
      }
    });
  };

  const fetchedData = data.map((value, index) => (
    <tr key={index}>
      <td>{++index}</td>
      <td>{value.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button
            className="mx-1"
            variant="primary"
            onClick={() => {
              navigate(`post/${value.id}`);
            }}
          >
            Details
          </Button>
          <Button
            className="mx-1"
            variant="success"
            onClick={() => {
              navigate(`post/${value.id}/edit`);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => deleteHandler(value)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return <>{fetchedData}</>;
};

export default PostListItem;
